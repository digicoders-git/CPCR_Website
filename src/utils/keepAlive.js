const BACKEND_URL = (import.meta.env.VITE_API_URL || 'https://cpcr-website-backend.onrender.com').replace(/\/$/, '')

// Ping backend every 14 minutes to prevent Render free tier cold starts
export function startKeepAlive() {
  const ping = () => {
    fetch(`${BACKEND_URL}/ping`)
      .then(() => console.debug('Backend keep-alive ping sent'))
      .catch(() => {}) // Silently ignore errors
  }

  // Ping immediately on load
  ping()

  // Then every 14 minutes
  const interval = setInterval(ping, 14 * 60 * 1000)
  return () => clearInterval(interval)
}
