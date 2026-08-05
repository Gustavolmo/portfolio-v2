import { useEffect, useState } from 'react'
import { GetHealthStatus, healthApi } from '../../../../global/http/handler-health.ts'
import { ObserveResponse } from '../../../../global/http/handler-observe.ts'
import { apiUrls } from '../../../../global/http/api-urls.ts'
import { unitFormat } from './unit-format.ts'
import MetricCard from './metric-card.tsx'
import MemoryMeter from './memory-meter.tsx'

export default function ServerStatsWindowContent() {
  const [healthStatus, setHealthStatus] = useState<GetHealthStatus>({ msg: 'ok', success: true })
  const [observeResponse, setObserveResponse] = useState<ObserveResponse>(null)
  const [streamConnected, setStreamConnected] = useState(false)

  useEffect(() => {
    const events = new EventSource(apiUrls.observe)

    events.onmessage = (event) => {
      const status = JSON.parse(event.data) as ObserveResponse
      setObserveResponse(status)
      setStreamConnected(true)
    }

    events.onerror = (error) => {
      console.error(error)
      setObserveResponse(null)
      setStreamConnected(false)
    }

    return () => events.close()
  }, [])

  useEffect(() => {
    const getHealth = async () => {
      const health = await healthApi.getHealth()
      setHealthStatus(health)
    }

    getHealth()

    const interval = setInterval(() => {
      getHealth()
    }, 10_000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const telemetryView = observeResponse && (
    <div className="space-y-2">
      <p className="text-xs uppercase tracking-[0.18em] text-zinc-400"># live runtime snapshot</p>
      <div className="flex flex-wrap gap-2">
        <MetricCard
          label="Clients"
          value={observeResponse.connectedClients}
          accent="text-emerald-300"
        />
        <MetricCard label="Uptime" value={unitFormat.duration(observeResponse.uptimeSeconds)} />
        <MetricCard
          label="Goroutines"
          value={observeResponse.goroutines}
          accent="text-violet-300"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <MemoryMeter
          label="Heap allocated"
          value={observeResponse.heapAllocatedBytes}
          total={observeResponse.systemMemoryBytes}
          color="bg-cyan-400"
        />
        <MemoryMeter
          label="Heap in use"
          value={observeResponse.heapInUseBytes}
          total={observeResponse.systemMemoryBytes}
          color="bg-violet-400"
        />
      </div>

      <div className="flex flex-wrap gap-2">
        <MetricCard
          label="Heap objects"
          value={observeResponse.heapObjects.toLocaleString()}
          accent="text-amber-300"
        />
        <MetricCard label="GC cycles" value={observeResponse.gcCycles} accent="text-amber-300" />
        <MetricCard
          label="Last GC pause"
          value={unitFormat.timeGap(observeResponse.lastGcPauseNanoseconds)}
          accent="text-rose-300"
        />
        <MetricCard label="CPUs" value={observeResponse.cpuCount} />
      </div>

      <div className="flex flex-wrap gap-x-5 gap-y-1 border-t border-zinc-800 pt-2 text-xs text-zinc-400">
        <span>
          <span className="text-zinc-300">runtime:</span> {observeResponse.goVersion}
        </span>
        <span>
          <span className="text-zinc-300">system memory:</span>{' '}
          {unitFormat.bytes(observeResponse.systemMemoryBytes)}
        </span>
      </div>
    </div>
  )

  const idleView = (
    <div className="flex min-h-32 flex-col justify-center gap-1 text-xs">
      <p className="text-cyan-300">$ observability --follow</p>
      <p className="animate-pulse text-zinc-300">waiting for telemetry event…</p>
    </div>
  )

  return (
    <section className="p-4">
      <div className="overflow-hidden border border-zinc-800 bg-zinc-950 font-mono text-zinc-100 shadow-inner">
        <header className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2 border-b border-zinc-800 bg-zinc-900 px-3 py-2 text-xs">
          <div className="flex items-center gap-2">
            <span
              className={`h-2.5 w-2.5 rounded-full ${healthStatus.success ? 'bg-emerald-400 shadow-[0_0_10px_#34d399]' : 'bg-red-400 shadow-[0_0_10px_#f87171]'}`}
            />
            <span className={healthStatus.success ? 'text-emerald-300' : 'text-red-300'}>
              system.health={healthStatus.success ? 'ok' : 'failed'}
            </span>
          </div>
          <span className={streamConnected ? 'text-cyan-300' : 'text-amber-300'}>
            {streamConnected ? 'stream=connected' : 'stream=awaiting-event'}
          </span>
        </header>

        <div className="p-3">{observeResponse ? telemetryView : idleView}</div>
        <footer className="flex flex-col gap-2 border-t border-zinc-800 bg-zinc-900/60 px-3 py-1.5 text-xs tracking-wide text-zinc-500">
          <p>source=sse · fields=runtime.memstats,clients,cpu</p>
          <div>
            <p className='text-zinc-300'>source-code: </p>
            <a
              className="underline text-cyan-500"
              href="https://github.com/Gustavolmo/portfolio-v2"
            >
              Frontend
            </a>{' '}
            <a
              className="underline text-cyan-500"
              href="https://github.com/Gustavolmo/portfolio-v2-api"
            >
              Backend
            </a>
          </div>
        </footer>
      </div>
    </section>
  )
}
