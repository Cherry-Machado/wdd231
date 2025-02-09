// Function to create the form
function createForm() {
  const form = document.createElement('form');
  form.setAttribute('method', 'get');
  form.setAttribute('action', 'thankyou.html');

  // First Name
  const firstNameLabel = document.createElement('label');
  firstNameLabel.textContent = 'First Name:';
  const firstNameInput = document.createElement('input');
  firstNameInput.setAttribute('type', 'text');
  firstNameInput.setAttribute('name', 'first');
  firstNameInput.setAttribute('title', 'Enter your first name');
  firstNameInput.setAttribute('autocomplete', 'given-name');
  firstNameInput.setAttribute('required', true);
  firstNameLabel.appendChild(firstNameInput);

  // Last Name
  const lastNameLabel = document.createElement('label');
  lastNameLabel.textContent = 'Last Name:';
  const lastNameInput = document.createElement('input');
  lastNameInput.setAttribute('type', 'text');
  lastNameInput.setAttribute('name', 'last');
  lastNameInput.setAttribute('title', 'Enter your last name');
  lastNameInput.setAttribute('autocomplete', 'family-name');
  lastNameInput.setAttribute('required', true);
  lastNameLabel.appendChild(lastNameInput);

  // Organizational Title
  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Organizational Title:';
  const titleInput = document.createElement('input');
  titleInput.setAttribute('type', 'text');
  titleInput.setAttribute('name', 'title');
  titleInput.setAttribute('title', 'Enter your organizational title');
  titleInput.setAttribute('autocomplete', 'organization-title');
  titleInput.setAttribute('pattern', '[A-Za-z\\s\\-]{7,}');
  titleLabel.appendChild(titleInput);

  // Email
  const emailLabel = document.createElement('label');
  emailLabel.textContent = 'Email:';
  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('title', 'Enter your email address');
  emailInput.setAttribute('autocomplete', 'email');
  emailInput.setAttribute('required', true);
  emailInput.setAttribute('placeholder', 'example@domain.com');
  emailLabel.appendChild(emailInput);

  // Mobile Phone
  const phoneLabel = document.createElement('label');
  phoneLabel.textContent = 'Mobile Phone:';
  const phoneInput = document.createElement('input');
  phoneInput.setAttribute('type', 'tel');
  phoneInput.setAttribute('name', 'phone');
  phoneInput.setAttribute('title', 'Enter your mobile phone number');
  phoneInput.setAttribute('autocomplete', 'tel');
  phoneInput.setAttribute('placeholder', '987-555-1234');
  phoneInput.setAttribute('required', true);
  phoneLabel.appendChild(phoneInput);

  // Business/Organization Name
  const orgLabel = document.createElement('label');
  orgLabel.textContent = 'Business/Organization Name:';
  const orgInput = document.createElement('input');
  orgInput.setAttribute('type', 'text');
  orgInput.setAttribute('name', 'organization');
  orgInput.setAttribute('title', 'Enter your business or organization name');
  orgInput.setAttribute('autocomplete', 'organization');
  orgInput.setAttribute('required', true);
  orgLabel.appendChild(orgInput);

  // Membership Level
  const membershipLabel = document.createElement('label');
  membershipLabel.textContent = 'Membership Level:';
  const membershipSelect = document.createElement('select');
  membershipSelect.setAttribute('name', 'membership');
  membershipSelect.setAttribute('title', 'Select your membership level');
  const levels = ['NP Membership', 'Bronze Membership', 'Silver Membership', 'Gold Membership'];
  levels.forEach(level => {
      const option = document.createElement('option');
      option.value = level;
      option.textContent = level;
      membershipSelect.appendChild(option);
  });
  membershipLabel.appendChild(membershipSelect);

  // Business/Organization Description
  const descLabel = document.createElement('label');
  descLabel.textContent = 'Business/Organization Description:';
  const descTextarea = document.createElement('textarea');
  descTextarea.setAttribute('name', 'description');
  descTextarea.setAttribute('rows', '4');
  descTextarea.setAttribute('cols', '50');
  descTextarea.setAttribute('placeholder', 'Enter a description of your business or organization');
  descLabel.appendChild(descTextarea);

  // Timestamp
  const timestampInput = document.createElement('input');
  timestampInput.setAttribute('type', 'hidden');
  timestampInput.setAttribute('name', 'timestamp');
  timestampInput.setAttribute('id', 'timestamp');
  timestampInput.value = new Date().toISOString();

  // Submit Button
  const submitButton = document.createElement('input');
  submitButton.setAttribute('type', 'submit');
  submitButton.setAttribute('value', 'Join to the Chamber');

  // Append all elements to the form
  form.appendChild(firstNameLabel);
  form.appendChild(lastNameLabel);
  form.appendChild(titleLabel);
  form.appendChild(emailLabel);
  form.appendChild(phoneLabel);
  form.appendChild(orgLabel);
  form.appendChild(membershipLabel);
  form.appendChild(descLabel);
  form.appendChild(timestampInput);
  form.appendChild(submitButton);

  return form;
}

// Inject the form into the .join-container
const joinContainer = document.querySelector('.join-container');
if (joinContainer) {
  const form = createForm();
  joinContainer.appendChild(form);
}

// Membership Levels Data
const membershipLevels = [
  {
      title: 'NP Membership',
      description: 'For non-profit organizations, no fee.',
      benefits: ['Access to community events', 'Networking opportunities']
  },
  {
      title: 'Bronze Membership',
      description: 'Basic membership with essential benefits.',
      benefits: ['All NP benefits', 'Discounted training sessions']
  },
  {
      title: 'Silver Membership',
      description: 'Enhanced membership with additional benefits.',
      benefits: ['All Bronze benefits', 'Advertising opportunities', 'Event discounts']
  },
  {
      title: 'Gold Membership',
      description: 'Premium membership with full benefits.',
      benefits: ['All Silver benefits', 'Spotlight positions on the homepage', 'Exclusive events']
  }
];

// Function to create membership cards
function createMembershipCards() {
  const cardsContainer = document.createElement('div');
  cardsContainer.classList.add('membership-cards');

  membershipLevels.forEach(level => {
      const card = document.createElement('div');
      card.classList.add('membership-card');

      const title = document.createElement('h3');
      title.textContent = level.title;

      const description = document.createElement('p');
      description.textContent = level.description;

      const link = document.createElement('a');
      link.textContent = 'Learn More';
      link.href = '#';
      link.addEventListener('click', (e) => {
          e.preventDefault();
          showModal(level);
      });

      card.appendChild(title);
      card.appendChild(description);
      card.appendChild(link);
      cardsContainer.appendChild(card);
  });

  return cardsContainer;
}

// Function to show modal with membership benefits
function showModal(level) {
  const modal = document.createElement('div');
  modal.classList.add('modal');

  const modalContent = document.createElement('div');
  modalContent.classList.add('modal-content');

  const closeButton = document.createElement('span');
  closeButton.classList.add('close');
  closeButton.textContent = '×';
  closeButton.addEventListener('click', () => {
      modal.remove();
  });

  const title = document.createElement('h2');
  title.textContent = level.title;

  const benefitsList = document.createElement('ul');
  level.benefits.forEach(benefit => {
      const li = document.createElement('li');
      li.textContent = benefit;
      benefitsList.appendChild(li);
  });

  modalContent.appendChild(closeButton);
  modalContent.appendChild(title);
  modalContent.appendChild(benefitsList);
  modal.appendChild(modalContent);

  document.body.appendChild(modal);
}

// Inject membership cards into the .join-container
if (joinContainer) {
  const cards = createMembershipCards();
  joinContainer.appendChild(cards);
}

// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;

// Divide the URL into two halves
const everything = currentUrl.split("?");

// Grab just the second half
let formData = everything[1].split("&");

// Function to extract and format form data
function show(cup) {
    let result = "";
    formData.forEach((element) => {
        if (element.startsWith(cup)) {
            result = element.split("=")[1].replace("%40", "@").replace(/\+/g, " "); // Replace "+" with spaces
        }
    });
    return result;
}

// Function to format the date as mm/dd/yyyy
function formatDate(dateString) {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are zero-based
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
}

// Display the form data
const showInfo = document.querySelector("#results");
showInfo.innerHTML = `
<p>First Name: ${show("first")}</p>
<p>Last Name: ${show("last")}</p>
<p>Email: <a href="mailto:${show("email")}">${show("email")}</a></p>
<p>Mobile Phone: ${show("phone")}</p>
<p>Business/Organization Name: ${show("organization")}</p>
<p>Application Date: ${formatDate(show("timestamp"))}</p>
`;

// Add a professional thanks message
const thanksMessage = document.createElement('h4');
thanksMessage.textContent = "Thank you for Joining Us. We look forward to serving you!";
thanksMessage.style.fontSize = "1.2rem";
thanksMessage.style.color = "#3D405B";
thanksMessage.style.marginTop = "1rem";
showInfo.appendChild(thanksMessage);

// Add a "Return" button to start a new form
const returnButton = document.createElement('button');
returnButton.textContent = "Return Home Page";
returnButton.style.backgroundColor = "#3D405B";
returnButton.style.color = "white";
returnButton.style.border = "none";
returnButton.style.borderRadius = "1rem";
returnButton.style.padding = "0.75rem 1.5rem";
returnButton.style.marginTop = "1rem";
returnButton.style.cursor = "pointer";
returnButton.addEventListener('click', () => {
    window.location.href = "./index.html"; // Redirect to the form page
});

// Center the button
const buttonContainer = document.createElement('div');
buttonContainer.style.textAlign = "center"; // Center the button horizontally
buttonContainer.appendChild(returnButton);
showInfo.appendChild(buttonContainer);
