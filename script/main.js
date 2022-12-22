// Select all sections and links in navbar
let allSections = document.querySelectorAll("section");
let allLinks = document.querySelectorAll("header .navbar-nav .nav-item a");
// listen to scroll event
window.addEventListener("scroll", () => {
  // loop over all sections
  for (section of allSections) {
    // detect when the section in the client viewport
    let sectionInView = section.getBoundingClientRect().top;
    if (sectionInView >= 0 && sectionInView <= 300) {
      // add class active to the link pointed to the section in viewport
      // and remove it from other links
      for (let link of allLinks) {
        link.classList.remove("active");
        if (link.hash === `#${section.id}`) {
          link.classList.add("active");
        } else {
          link.classList.remove("active");
        }
      }
    }
  }
});
