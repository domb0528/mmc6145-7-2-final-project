export async function gettargetCalories(id) {
  

  const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?timeFrame=day${query}?apiKey=${process.env.API_KEY}`)
  if (response.status !== 200)
    return null
  const data = await response.json()
  return data
}

export async function searchtargetCalories(query) {

  const response = await fetch(`https://api.spoonacular.com/mealplanner/generateapiKey=afb3f661343b437f8d72e45c372ff95a`)
  if (response.status !== 200)
    return null
  const data = await response.json()
  console.log(data)
  return data.productMatches
}