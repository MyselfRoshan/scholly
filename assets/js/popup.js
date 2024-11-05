// import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';
import Swiper from '../../node_modules/swiper/swiper-bundle.min.mjs';
const dialog = document.getElementById("reviewDialog");
const closeButton = document.querySelector(".close-button");
const prevButton = document.querySelector(".prev-review");
const nextButton = document.querySelector(".next-review");

// Show dialog on page load with a slight delay
window.addEventListener("load", () => {
  setTimeout(() => {
    dialog.showModal();
  }, 500);
});

// Close dialog
closeButton.addEventListener("click", () => {
  dialog.close();
});

// Close dialog when clicking on backdrop
dialog.addEventListener("click", (e) => {
  const dialogDimensions = dialog.getBoundingClientRect();
  if (
    e.clientX < dialogDimensions.left ||
    e.clientX > dialogDimensions.right ||
    e.clientY < dialogDimensions.top ||
    e.clientY > dialogDimensions.bottom
  ) {
    dialog.close();
  }
});

// Prevent dialog from closing when clicking inside
dialog.querySelector(".dialog-content").addEventListener("click", (e) => {
  e.stopPropagation();
});

// Sample review data (you can expand this)
// const reviews = [
//   {
//     university_logo:"./assets/images/joined-partners/logo-6.png",
//     text: "Scholly help me find the right path of my career and them also very heartwarming to assist and give advice for a new student like me. Thank you Vee Wahid for a great and friendly assistance.",
//     name: "Will Smith",
//     post: "Head of Department",
//   },
// ];

// let currentReview = 0;

// // Navigation functions (can be expanded with more reviews)
// prevButton.addEventListener("click", () => {
//   // Implement previous review logic
// });

// nextButton.addEventListener("click", () => {
//   // Implement next review logic
// });


const swiper = new Swiper('.dialog-content', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 16,
    pagination: {
        el: ".review-pagination",
        type: "fraction",
    },
    navigation: {
      nextEl: '.next-review',
      prevEl: '.prev-review',
    },
  });
  