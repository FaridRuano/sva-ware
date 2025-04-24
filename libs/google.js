// lib/google.js
import { google } from 'googleapis';

export function getCalendarClient() {
  const {
    GOOGLE_SERVICE_ACC_EMAIL,
    GOOGLE_PRIVATE_KEY,
    GOOGLE_TUTOR_ACCOUNT
  } = process.env;

  let auth;

  if (GOOGLE_SERVICE_ACC_EMAIL && GOOGLE_PRIVATE_KEY) {
    // Autenticación por JWT + suplantación
    auth = new google.auth.JWT({
      email: GOOGLE_SERVICE_ACC_EMAIL,
      key: GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events'
      ],
      subject: GOOGLE_TUTOR_ACCOUNT   // actúa como tutor
    });
  } else {
    // Fallback a ADC (p.ej. en Cloud Run / Cloud Shell)
    auth = new google.auth.GoogleAuth({
      scopes: [
        'https://www.googleapis.com/auth/calendar',
        'https://www.googleapis.com/auth/calendar.events'
      ]
    });
  }

  return google.calendar({ version: 'v3', auth });
}
