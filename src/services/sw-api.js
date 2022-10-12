const baseUrl = 'https://swapi.dev'

export async function getStarships() {
  const res = await fetch(`${baseUrl}/starships/`)
  return res.json()
}