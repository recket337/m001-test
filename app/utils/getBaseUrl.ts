export function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL)
    return 'https://' + process.env.NEXT_PUBLIC_BASE_URL
  else return 'http://localhost:3000'
}