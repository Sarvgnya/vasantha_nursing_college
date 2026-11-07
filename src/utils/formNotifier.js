/**
 * Lead Notification & Routing Utility
 * Handles:
 * 1. Email Notifications via Web3Forms API to sarvgnya25@gmail.com
 * 2. Local Lead Storage (backup in browser localStorage)
 */

export const COLLEGE_CONTACT = {
  displayPhone: '+91 9512592211',
  alternatePhone: '+91 9913377195',
  admissionsEmail: 'sarvgnya25@gmail.com',
  infoEmail: 'sarvgnya25@gmail.com',
  // Free Web3Forms Access Key for sarvgnya25@gmail.com
  web3formsKey: '7c6a0b98-0c66-41dc-908f-e18e803c73ce' 
};

/**
 * Send Email Notification via Web3Forms API
 */
export async function sendEmailNotification(subject, data) {
  try {
    const payload = {
      access_key: COLLEGE_CONTACT.web3formsKey,
      subject: subject || 'New Admission Application - VASANTHA GROUP OF EDUCATION',
      from_name: 'VASANTHA GROUP OF EDUCATION Admissions Portal',
      to: COLLEGE_CONTACT.admissionsEmail,
      ...data
    };

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(payload)
    });

    const result = await res.json();
    return result;
  } catch (err) {
    console.warn('Email notification dispatch notice:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Backup lead to browser localStorage so records are never lost
 */
export function saveLeadLocally(type, data) {
  try {
    const storageKey = 'vasantha_college_leads';
    const existing = JSON.parse(localStorage.getItem(storageKey) || '[]');
    const newEntry = {
      id: 'lead_' + Date.now(),
      type,
      data,
      timestamp: new Date().toISOString()
    };
    existing.unshift(newEntry);
    // Keep last 100 leads
    localStorage.setItem(storageKey, JSON.stringify(existing.slice(0, 100)));
  } catch (e) {
    console.warn('LocalStorage lead backup notice:', e);
  }
}

/**
 * Unified Submission Handler:
 * 1. Saves lead locally
 * 2. Fires email notification in background
 */
export function processFormSubmission({ type = 'admission', data }) {
  // 1. Save backup locally
  saveLeadLocally(type, data);

  // 2. Email Notification
  const subject = type === 'contact'
    ? `Campus Enquiry from ${data.name || 'Visitor'} - ${data.course || 'Admissions'}`
    : `New Admission Application: ${data.fullName || data.full_name} (${data.course || 'B.Sc. Nursing'})`;

  sendEmailNotification(subject, data);
}
