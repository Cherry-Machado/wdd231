// Dynamically update the year and date of last modification
window.onload = () => {
  document.getElementById("currentyear").textContent = new Date().getFullYear();
  document.getElementById(
    "lastModified"
  ).textContent = `Last Modification: ${document.lastModified}`;
};

// Responsive navigation menu
const hamburger = document.querySelector(".header__hamburger");
const navMenu = document.querySelector(".nav-menu");
const mainContainer = document.querySelector(".main");

hamburger.addEventListener("click", () => {
  [hamburger, navMenu, mainContainer].forEach((el) =>
    el.classList.toggle("active")
  );
});

document.querySelectorAll(".nav-link").forEach((link) =>
  link.addEventListener("click", () => {
    [hamburger, navMenu, mainContainer].forEach((el) =>
      el.classList.remove("active")
    );
  })
);

// Courses and navigation array
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
    completed: true,
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
    completed: true,
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
    completed: true,
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
    completed: true,
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

const navigationList = document.querySelector(".card__navigation");

// Show filtered courses and calculate credits
function displayCourses(filterFunction) {
  navigationList.innerHTML = "";

  const filteredCourses = courses.filter(filterFunction);
  const totalCredits = filteredCourses.reduce(
    (acc, course) => acc + course.credits,
    0
  );

  filteredCourses.forEach((course) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${course.subject} ${course.number}: ${course.title} - ${course.credits} credits`;
    listItem.classList.add("card__navigation-item");
    navigationList.appendChild(listItem);
  });

  const totalCreditsItem = document.createElement("li");
  totalCreditsItem.textContent = `Total Credits: ${totalCredits}`;
  totalCreditsItem.style.fontWeight = "bold";
  totalCreditsItem.style.marginTop = "10px";
  totalCreditsItem.style.listStyleType = "none";
  navigationList.appendChild(totalCreditsItem);
}

// Displaying course details with styles
function displayCourseDetails(courseNumber, withStyles = false) {
  navigationList.innerHTML = "";
  const course = courses.find((c) => c.number === courseNumber);

  if (course) {
    Object.entries(course).forEach(([key, value]) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${key}: ${
        Array.isArray(value) ? value.join(", ") : value
      }`;
      if (withStyles) {
        listItem.style.fontStyle = key === "completed" ? "normal" : "italic";
        if (key === "completed") {
          listItem.style.backgroundColor = "green";
          listItem.style.color = "white";
          listItem.style.fontWeight = "bold";
        }
      }
      listItem.classList.add("card__navigation-item");
      navigationList.appendChild(listItem);
    });
  } else {
    const listItem = document.createElement("li");
    listItem.textContent = `No course found with number ${courseNumber}`;
    listItem.classList.add("card__navigation-item");
    navigationList.appendChild(listItem);
  }
}

// Event listeners for course navigation
const eventListeners = [
  { selector: ".click-all", filter: () => true },
  { selector: ".click-cse", filter: (c) => c.subject === "CSE" },
  { selector: ".click-wdd", filter: (c) => c.subject === "WDD" },
];

eventListeners.forEach(({ selector, filter }) =>
  document
    .querySelector(selector)
    .addEventListener("click", () => displayCourses(filter))
);

[110, 130, 111, 210, 131, 231].forEach((num) =>
  document
    .querySelector(`.click-${num}`)
    .addEventListener("click", () =>
      displayCourseDetails(num, [110, 130, 111, 131].includes(num))
    )
);
