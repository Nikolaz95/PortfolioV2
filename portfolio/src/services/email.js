import emailjs from '@emailjs/browser'

// Keys come from .env.local (see .env.example).
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

/**
 * Sends the contact form to your inbox through EmailJS.
 * `data` = { firstName, lastName, email, subject, message } – the same names used in the EmailJS template.
 * Throws an error if something goes wrong, so the form can show an error message.
 */
export async function sendContactEmail(data) {
  if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
    throw new Error('EmailJS keys are missing. Add them to .env.local (see .env.example) and restart `npm run dev`.')
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, data, { publicKey: PUBLIC_KEY })
}
