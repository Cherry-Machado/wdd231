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

// Function to extract and format form data
function show(cup) {
  let result = "";
  formData.forEach((element) => {
      if (element.startsWith(cup)) {
          result = decodeURIComponent(element.split("=")[1].replace(/\+/g, " ")); // Decode URL-encoded values
      }
  });
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

// Membership Levels Data
const membershipLevels = [
  {
      title: 'NP Membership',
      description: 'For non-profit organizations, no fee.',
      benefits: ['Access to community events', 'Networking opportunities'],
      price: '0 USD / month'
  },
  {
      title: 'Bronze Membership',
      description: 'Basic membership with essential benefits.',
      benefits: ['All NP benefits', 'Discounted training sessions'],
      price: '50 USD /month'
  },
  {
      title: 'Silver Membership',
      description: 'Enhanced membership with additional benefits.',
      benefits: ['All Bronze benefits', 'Advertising opportunities', 'Event discounts'],
      price: '100 USD /month'
  },
  {
      title: 'Gold Membership',
      description: 'Premium membership with full benefits.',
      benefits: ['All Silver benefits', 'Spotlight positions on the homepage', 'Exclusive events'],
      price: '200 USD /month'
  }
];

// Function to show modal with membership benefits
function showModal(level) {
  const modal = document.getElementById('modal');
  const modalTitle = document.getElementById('modal-title');
  const modalBenefits = document.getElementById('modal-benefits');
  const modalPrice = document.getElementById('modal-price');

  // Find the selected membership level
  const selectedLevel = membershipLevels.find(m => m.title === level);

  if (selectedLevel) {
      // Populate modal content
      modalTitle.textContent = selectedLevel.title;
      modalBenefits.innerHTML = selectedLevel.benefits.map(benefit => `<li>${benefit}</li>`).join('');
      modalPrice.textContent = selectedLevel.price;

      // Display the modal
      modal.style.display = 'block';

      // Close modal when clicking the close button
      const closeButton = document.querySelector('.close');
      closeButton.addEventListener('click', () => {
          modal.style.display = 'none';
      });

      // Close modal when clicking outside the modal
      window.addEventListener('click', (event) => {
          if (event.target === modal) {
              modal.style.display = 'none';
          }
      });
  }
}

// Add event listeners to "Learn More" links
document.querySelectorAll('.learn-more').forEach(link => {
  link.addEventListener('click', (e) => {
      e.preventDefault();
      const level = e.target.closest('.membership-card').getAttribute('data-level');
      showModal(level);
  });
});

// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;

// Divide the URL into two halves
const everything = currentUrl.split("?");

// Grab just the second half
let formData = everything[1].split("&");

// Display the form data
document.getElementById('first-name').textContent = show("first");
document.getElementById('last-name').textContent = show("last");
document.getElementById('email').textContent = show("email");
document.getElementById('email').href = `mailto:${show("email")}`;
document.getElementById('phone').textContent = show("phone");
document.getElementById('organization').textContent = show("organization");
document.getElementById('description').textContent = show("description");
document.getElementById('membership').textContent = show("membership");
document.getElementById('timestamp').textContent = formatDate(show("timestamp"));

// Add event listener for the return button
document.getElementById('return-button').addEventListener('click', () => {
  window.location.href = "./index.html"; // Redirect to the form page
});