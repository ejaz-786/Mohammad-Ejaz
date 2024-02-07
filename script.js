// Toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// section scroll

let sections = document.querySelectorAll("section");
let Navlinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  // scroll section

  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      // active navbar links
      Navlinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector(`header nav a[href*=${id}]`)
          .classList.add("active");
      });
    }
  });

  // sticky Header
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  // Remove toggle icon and navbar when click to nav link scroll

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

//  Google form storing data

const google_form_url =
  "https://docs.google.com/forms/d/1MXuedJ_wDYfOSjuTliloVg_B0FP2vioeUmKVOsGzV9E/prefill";

document
  .getElementById("googleform")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    const formData = new FormData(this);
    const formEntries = formData.entries();

    let formDataObject = {};
    for (const [key, value] of formEntries) {
      formDataObject[key] = value;
    }

    // Replace 'YOUR_GOOGLE_FORM_URL' with the actual Google Form URL
    const googleFormUrl = google_form_url;

    fetch(googleFormUrl, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(formDataObject).toString(),
    })
      .then((response) => {
        // Handle response if needed
        console.log("Form submitted successfully");
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });
  });
