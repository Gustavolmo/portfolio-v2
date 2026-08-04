export const unitFormat = {
  bytes: (bytes: number) => {
    if (bytes === 0) return '0 B'

    const units = ['B', 'KB', 'MB', 'GB', 'TB']
    const unitIndex = Math.min(Math.floor(Math.log(bytes) / Math.log(1024)), units.length - 1)
    const value = bytes / 1024 ** unitIndex

    return `${value.toLocaleString(undefined, { maximumFractionDigits: value >= 100 ? 0 : 1 })} ${units[unitIndex]}`
  },

  duration: (seconds: number) => {
    const days = Math.floor(seconds / 86_400)
    const hours = Math.floor((seconds % 86_400) / 3_600)
    const minutes = Math.floor((seconds % 3_600) / 60)
    const remainingSeconds = Math.floor(seconds % 60)

    return [
      days > 0 ? `${days}d` : null,
      hours > 0 || days > 0 ? `${hours}h` : null,
      minutes > 0 || hours > 0 || days > 0 ? `${minutes}m` : null,
      `${remainingSeconds}s`,
    ]
      .filter(Boolean)
      .join(' ')
  },

  timeGap: (nanoseconds: number) => {
    if (nanoseconds < 1_000) return `${nanoseconds} ns`
    if (nanoseconds < 1_000_000) return `${(nanoseconds / 1_000).toFixed(1)} µs`
    if (nanoseconds < 1_000_000_000) return `${(nanoseconds / 1_000_000).toFixed(1)} ms`
    return `${(nanoseconds / 1_000_000_000).toFixed(2)} s`
  },
}
