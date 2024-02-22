window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  var scrollPosition = window.scrollY;

  if (scrollPosition > 0) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});
// Fetch repositories from GitHub API
fetch("https://api.github.com/users/PONDRICK/repos")
  .then((response) => response.json())
  .then((repos) => {
    // Sort repositories by date
    repos.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));

    const otherProjectsContainer = document.getElementById(
      "other-projects-container"
    );

    // Iterate over sorted repositories and create project cards
    repos.forEach((repo) => {
      const projectCard = document.createElement("a");
      projectCard.classList.add("project-card");
      projectCard.href = repo.html_url;
      projectCard.target = "_blank";

      const projectName = document.createElement("h3");
      projectName.textContent = repo.name;

      const projectYear = document.createElement("p");
      const year = new Date(repo.created_at).getFullYear(); // Extract year from created_at
      projectYear.textContent = `${year}`;

      projectCard.appendChild(projectName);
      projectCard.appendChild(projectYear);

      otherProjectsContainer.appendChild(projectCard);
    });
  })
  .catch((error) => {
    console.error("Error fetching repositories:", error);
  });
window.addEventListener("scroll", function () {
  var goToTopBtn = document.getElementById("goToTopBtn");
  if (window.pageYOffset > 300) {
    // Adjust scroll position as needed
    goToTopBtn.classList.add("show");
  } else {
    goToTopBtn.classList.remove("show");
  }
});

// Smooth scroll to top when button is clicked
document.getElementById("goToTopBtn").addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  var offsetTop = section.offsetTop;
  var windowHeight = window.innerHeight;
  var scrollTo = offsetTop - windowHeight / 2 + section.offsetHeight / 2;
  window.scrollTo({
    top: scrollTo,
    behavior: "smooth",
  });
}

// Add event listeners to nav links
document.querySelectorAll("nav ul li a").forEach(function (link) {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent default anchor behavior
    var sectionId = link.getAttribute("href").slice(1); // Get section id from href
    scrollToSection(sectionId); // Scroll to the middle of the section
  });
});
document.addEventListener("mousemove", function (e) {
  const x = e.clientX / window.innerWidth;
  const y = e.clientY / window.innerHeight;

  // Update background gradient position based on mouse position
  document.querySelector(
    ".interactive-background"
  ).style.backgroundPosition = `${x * 100}% ${y * 100}%`;
});
