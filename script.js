'use strict';

// element toggle function
const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
};

// sidebar toggle
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

// Navbar page switching
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let j = 0; j < pages.length; j++) {
      if (this.innerHTML.toLowerCase() === pages[j].dataset.page) {
        pages[j].classList.add("active");
        navigationLinks[j].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[j].classList.remove("active");
        navigationLinks[j].classList.remove("active");
      }
    }

  });
}
// Animate skill bars when Skills page is shown
function animateSkills() {
  const skillPage = document.querySelector('[data-page="skills"]');
  const isActive = skillPage.classList.contains('active');

  if (isActive) {
    const skillFills = skillPage.querySelectorAll('.skill-fill');
    skillFills.forEach(el => {
      const value = el.getAttribute('data-skill');
      el.style.width = value;
    });
  }
}

// Hook into nav link switching
navigationLinks.forEach(link => {
  link.addEventListener("click", () => {
    setTimeout(animateSkills, 300); // wait for tab switch animation
  });
});


// Resume open new tab
const resumeButton = document.getElementById('resume-button');
resumeButton.addEventListener('click', function() {
  window.open('SVADHA_RESUME.pdf', '_blank');
});

// Contact form validation
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}
// Resume Preview Toggle
const toggleBtn = document.querySelector('.toggle-preview-btn');
const resumePreview = document.querySelector('.resume-preview');

if (toggleBtn && resumePreview) {
  toggleBtn.addEventListener('click', () => {
    const isVisible = resumePreview.style.display === 'block';
    resumePreview.style.display = isVisible ? 'none' : 'block';
    toggleBtn.textContent = isVisible ? 'Show Preview' : 'Hide Preview';
  });
}
