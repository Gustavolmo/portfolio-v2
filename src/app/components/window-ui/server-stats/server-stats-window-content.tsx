import { useEffect, useState } from 'react'
import { getHealthStatus, healthApi } from '../../../../global/http/handler-health.ts'

export default function ServerStatsWindowContent() {
  const [healthStatus, setHealthStatus] = useState<getHealthStatus>({ msg: 'ok', success: true })

  useEffect(() => {
    getHealth()
  }, [])

  async function getHealth() {
    const health = await healthApi.getHealth()
    setHealthStatus(health)
  }

  return (
    <p
      className={`border m-4 px-2 rounded-full w-fit ${healthStatus.success ? 'bg-emerald-200 border-emerald-600 text-emerald-800' : 'bg-red-200 border-red-600 text-red-800'}`}
    >
      status: {healthStatus.msg}
    </p>
  )
}
