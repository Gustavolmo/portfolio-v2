import { apiUrls } from './api-urls.ts'

type EmailPayload = {
  contactAddress: string
  cc: string
  subject: string
  msg: string
}

export const emailApi = {
  send: async (payload: EmailPayload): Promise<{ error: string }> => {
    const emailRequest = new Request(apiUrls.email, {
      body: JSON.stringify(payload),
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    try {
      const res = await fetch(emailRequest)
      if (!res.ok) {
        console.log(res.status)
        return { error: `Failed to send - ${res.status}` }
      } else {
        return { error: '' }
      }
    } catch (err) {
      console.error("Error caught", err)
      return { error: `Failed to send - ${err}` }
    }
  },
}
