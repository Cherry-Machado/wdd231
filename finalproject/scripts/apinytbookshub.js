const API_KEY = "HboUobE0KD6vKALHcNE3OeNkulH3llMV";
const BASE_URL = "https://api.nytimes.com/svc/books/v3/lists/overview.json?api-key";

export async function getNytBestSellers() {
  try {
    const response = await fetch(
      `${BASE_URL}=${API_KEY}`
    );

    if (!response.ok) throw new Error("Mistake getting data from server!");

    const data = await response.json();
    console.log("Datos de la API:", data);
    return data;
  } catch (error) {
    console.error("Error en getNytBestSellers:", error);
    throw error;
  }
}

