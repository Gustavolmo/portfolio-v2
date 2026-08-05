export type ObserveResponse = {
  connectedClients: number
  uptimeSeconds: number
  goroutines: number
  heapAllocatedBytes: number
  heapInUseBytes: number
  heapObjects: number
  systemMemoryBytes: number
  gcCycles: number
  lastGcPauseNanoseconds: number
  goVersion: string
  cpuCount: number
} | null
