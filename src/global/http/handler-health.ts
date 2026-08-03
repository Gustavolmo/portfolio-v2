import { apiUrls } from './api-urls.ts'

type HealthResponse = {
  status: 'ok'
}

export type getHealthStatus = {
  success: boolean
  msg: string
}

export const healthApi = {
  getHealth: async (): Promise<getHealthStatus> => {
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
      return { msg: ((await res.json()) as HealthResponse).status, success: true }
    }
  },
}
