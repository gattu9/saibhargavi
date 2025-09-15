/*========= typing animation =========*/
var typed = new Typed(".multiple-text", {
  strings: ["Sai Bhargavi Gattu", "Data Analyst"],
  startDelay: 500,
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

/*========= menu icon navbar =========*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

/*========= scroll section active link =========*/
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  /*========= sticky navbar =========*/
  let header = document.querySelector(".header");
  header.classList.toggle("sticky", window.scrollY > 50);

  /*========= remove icon navbar when click navbar link (scroll) =========*/
  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

/*========= dark light mode =========*/
let darkModeIcon = document.querySelector("#darkMode-icon");

darkModeIcon.onclick = () => {
  darkModeIcon.classList.toggle("bx-sun");
  document.body.classList.toggle("dark-mode");
};

/*========= scroll reveal =========*/
ScrollReveal({
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img img, .services-container, .steps, .deliverables-container", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img img", { origin: "left" });
ScrollReveal().reveal(".home-content h3, .home-content p, .about-content", { origin: "right" });

/*========= Download resume as PDF =========*/
const dlBtn = document.getElementById('download-pdf');
if (dlBtn) {
  dlBtn.addEventListener('click', function (e) {
    e.preventDefault();
    const element = document.querySelector('.resume-card');
    const opt = {
      margin:       10,
      filename:     'Sai_Bhargavi_Gattu_Resume.pdf',
      image:        { type: 'jpeg', quality: 0.98 },
      html2canvas:  { scale: 2 },
      jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };
    html2pdf().from(element).set(opt).save();
  });
}
