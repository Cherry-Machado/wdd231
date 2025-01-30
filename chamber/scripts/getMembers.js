const url = "../chamber/data/members.json";

// Function to get the members
export async function getMembers(callback) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(
        `HTTP error! Failed to fetch members.json. status: ${response.status}`
      );
    }
    const data = await response.json();
    console.table(data.companies);

    // Call the callback with the data
    if (callback && typeof callback === "function") {
      callback(data.companies);
    }
  } catch (error) {
    console.error("Error fetching members.json: ", error);
  }
}

