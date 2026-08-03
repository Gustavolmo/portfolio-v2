import { useEffect, useState } from 'react'
import { GetHealthStatus, healthApi } from '../../../../global/http/handler-health.ts'
import { ObserveResponse } from '../../../../global/http/handler-observe.ts'
import { apiUrls } from '../../../../global/http/api-urls.ts'

export default function ServerStatsWindowContent() {
  const [healthStatus, setHealthStatus] = useState<GetHealthStatus>({ msg: 'ok', success: true })
  const [observeResponse, setObserveResponse] = useState<ObserveResponse>()

  useEffect(() => {
    const events = new EventSource(apiUrls.observe)

    events.onmessage = (event) => {
      const status = JSON.parse(event.data) as ObserveResponse
      setObserveResponse(status)
    }

    events.onerror = (error) => {
      console.error(error)
      setObserveResponse({
        connectedClients: 'Error',
        uptimeSeconds: 'Error',
      })
    }

    return () => events.close()
  }, [])

  useEffect(() => {
    const getHealth = async () => {
      const health = await healthApi.getHealth()
      setHealthStatus(health)
    }

    getHealth()
  }, [])

  return (
    <section className="px-4 py-8">
      <div
        className={`border my-1 px-2 rounded-full w-fit ${healthStatus.success ? 'bg-emerald-200 border-emerald-600 text-emerald-800' : 'bg-red-200 border-red-600 text-red-800'}`}
      >
        status: {healthStatus.msg}
      </div>

      <div className="bg-zinc-950 text-zinc-100 font-mono flex flex-col gap-0.5 w-git p-2">
        <p>connected clients: {observeResponse?.connectedClients}</p>
        <p>instance uptime: {observeResponse?.uptimeSeconds} s</p>
      </div>
    </section>
  )
}
