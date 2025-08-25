// script.js

// Set the current year in the footer
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  const form = document.getElementById("contact-form");
  const responseEl = document.getElementById("form-response");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // Build a mailto link
      const subject = encodeURIComponent(`New inquiry from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      );
      const mailtoLink = `mailto:joshcarter0624@gmail.com?subject=${subject}&body=${body}`;

      // Open the user's mail client
      window.location.href = mailtoLink;

      // Show a thank you message
      if (responseEl) {
        responseEl.textContent =
          "Thank you for reaching out. Your email draft should open automatically.";
      }

      // Optionally, reset the form
      form.reset();
    });
  }

  // Back to top button visibility
  const backToTopBtn = document.querySelector(".back-to-top");
  window.addEventListener("scroll", () => {
    if (backToTopBtn) {
      if (window.scrollY > 300) {
        backToTopBtn.style.display = "block";
      } else {
        backToTopBtn.style.display = "none";
      }
    }
  });
});