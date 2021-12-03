export const getUltimos = async () => {
  const resp = await window.fetch('http://localhost:8080/ultimos')
  const data = await resp.json()

  return data.ultimos
}
