// Function to validate email
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Function to validate phone number
  function validatePhone(phone) {
    const phoneRegex = /^\+\d{1,3}\d{9,15}$/; // Example: +5511954283340
    return phoneRegex.test(phone);
  }
  
  // Grab the entire URL for this page including the attached GET values
  const currentUrl = window.location.href;
  
  
  // Divide the URL into two halves
  const everything = currentUrl.split("?");
  console.log(everything);
  
  // Grab just the second half
  let formData = everything[1].split("&");
  console.log(formData);
  
  // Function to extract and format form data
  function show(cup) {
    let result = "";
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = decodeURIComponent(element.split("=")[1].replace(/\+/g, " ")); // Decode URL-encoded values
        }
    });
    console.log('Este es el valor total de result: ', result);
    return result;
  }
  
  // Function to format the date as mm/dd/yyyy
  function formatDate(dateString) {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
        return "Invalid Date";
    }
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  }
  
  // Display the form data
  document.getElementById('first-name').textContent = show("first");
  document.getElementById('last-name').textContent = show("last");
  document.getElementById('email').textContent = show("email");
  document.getElementById('email').href = `mailto:${show("email")}`;
  document.getElementById('country').textContent = show("country");
  document.getElementById('phone').textContent = show("phone");
  document.getElementById('organization').textContent = show("organization");
  document.getElementById('timestamp').textContent = formatDate(show("timestamp"));
  console.log("Country:", show("country"));
  
  // Add event listener for the return button
  document.querySelector('.contact__cta').addEventListener('click', () => {
    window.location.href = "../index.html"; // Redirect to the form page
  });