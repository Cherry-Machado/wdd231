// Fetch the Weather url. Make the request to the API.
export async function apiFetch(url) {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        return data; 
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
      console.error("Error fetching weather data: ", error);
      return null; // 
    }
  }