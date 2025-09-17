import { Resend } from 'resend'

let resend: Resend | null = null

export function useResend() {
  const config = useRuntimeConfig()
  
  if (!resend && config.privateResendApiKey) {
    resend = new Resend(config.privateResendApiKey)
  }
  
  return resend
}

export async function sendNotificationEmail({
  to,
  subject,
  html,
  from = 'MineSite <noreply@minesite.com>'
}: {
  to: string
  subject: string
  html: string
  from?: string
}) {
  const resendClient = useResend()
  
  if (!resendClient) {
    console.warn('Resend not configured - email not sent')
    return null
  }
  
  try {
    const result = await resendClient.emails.send({
      from,
      to,
      subject,
      html
    })
    
    console.log('Email sent successfully:', result)
    return result
  } catch (error) {
    console.error('Failed to send email:', error)
    throw error
  }
}