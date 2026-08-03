import { apiUrls } from './api-urls.ts'

type HealthResponse = {
  status: string
}

export type GetHealthStatus = {
  success: boolean
  msg: string
}

export const healthApi = {
  getHealth: async (): Promise<GetHealthStatus> => {
    const healthRequest = new Request(apiUrls.health, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    const res = await fetch(healthRequest)

    if (!res.ok) {
      return { msg: `Server is down - ${res.status}`, success: false }
    } else {
      const healthResponse = (await res.json()) as HealthResponse
      return { msg: healthResponse.status, success: true }
    }
  },
}
