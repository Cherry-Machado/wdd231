// JavaScript to dynamically update the year and last modified date
window.onload = function () {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent =
    "Last Modification: " + document.lastModified;
};

// JavaScript to dynamically responsive website navigation menu

const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainContainer = document.querySelector(".main");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
  mainContainer.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    mainContainer.classList.remove("active");
  })
);

/******************************************/

const courses = [
  {
    subject: "CSE",
    number: 110,
    title: "Introduction to Programming",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 130,
    title: "Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.",
    technology: ["HTML", "CSS"],
    completed: false,
  },
  {
    subject: "CSE",
    number: 111,
    title: "Programming with Functions",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.",
    technology: ["Python"],
    completed: false,
  },
  {
    subject: "CSE",
    number: 210,
    title: "Programming with Classes",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.",
    technology: ["C#"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 131,
    title: "Dynamic Web Fundamentals",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
  {
    subject: "WDD",
    number: 231,
    title: "Frontend Web Development I",
    credits: 2,
    certificate: "Web and Computer Programming",
    description:
      "This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.",
    technology: ["HTML", "CSS", "JavaScript"],
    completed: false,
  },
];

// Select the buttons and the destination list
const clickAllButton = document.querySelector(".click-all");
const clickCseButton = document.querySelector(".click-cse");
const clickWddButton = document.querySelector(".click-wdd");
const navigationList = document.querySelector(".card__navigation");

// Generic function to display titles based on a filter
function displayCourses(filterFunction) {
  // Clear the list before adding new elements
  navigationList.innerHTML = "";

  // Filter the courses and create a list item for each
  courses.filter(filterFunction).forEach((course) => {
    const listItem = document.createElement("li");
    listItem.textContent = course.title; // Show course title
    listItem.classList.add("card__navigation-item"); // Optional class for styling
    navigationList.appendChild(listItem); // Insert into the list
  });
}

// Event to all courses
clickAllButton.addEventListener("click", () => {
  displayCourses(() => true); // Show all courses
});

// Event to show 'CSE' courses
clickCseButton.addEventListener("click", () => {
  displayCourses((course) => course.subject === "CSE"); // Filter by 'CSE'
});

// Event to show 'WDD' courses
clickWddButton.addEventListener("click", () => {
  displayCourses((course) => course.subject === "WDD"); // Filter by 'WDD'
});

// Select the buttons and the destination list
const click110Button = document.querySelector(".click-110");
const click130Button = document.querySelector(".click-130");
const click111Button = document.querySelector(".click-111");
const click210Button = document.querySelector(".click-210");
const click131Button = document.querySelector(".click-131");
const click231Button = document.querySelector(".click-231");
const navigationList_2 = document.querySelector(".card__navigation");

// Function to display course details based on the course number
function displayCourseDetails(courseNumber) {
  navigationList_2.innerHTML = "";

  // Find the course with the given number
  const course = courses.find((c) => c.number === courseNumber);

  if (course) {
    // Create a list item for each property
    for (const [key, value] of Object.entries(course)) {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${
        Array.isArray(value) ? value.join(", ") : value
      }`; // Display arrays as text
      listItem.classList.add("card__navigation-item"); // Optional class for styling
      navigationList_2.appendChild(listItem); // Insert into the list
    }
  } else {
    // If the course is not found, display a message
    const listItem = document.createElement("li");
    listItem.textContent = `No course found with number ${courseNumber}`;
    listItem.classList.add("card__navigation-item");
    navigationList_2.appendChild(listItem);
  }
}

// Event to show course details based on the course number
click110Button.addEventListener("click", () => displayCourseDetails(110));
click130Button.addEventListener("click", () => displayCourseDetails(130));
click111Button.addEventListener("click", () => displayCourseDetails(111));
click210Button.addEventListener("click", () => displayCourseDetails(210));
click131Button.addEventListener("click", () => displayCourseDetails(131));
click231Button.addEventListener("click", () => displayCourseDetails(231));
