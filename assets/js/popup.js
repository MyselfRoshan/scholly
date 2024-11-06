import Swiper from "../../node_modules/swiper/swiper-bundle.min.mjs"
const dialog = document.getElementById("reviewDialog")
const closeButton = document.querySelector(".close-button")

// Show dialog on page load with a slight delay
window.addEventListener("load", () => {
    setTimeout(() => {
        dialog.showModal()
    }, 500)
})

// Close dialog
closeButton.addEventListener("click", () => {
    dialog.close()
})

// Close dialog when clicking on backdrop
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
        e.clientX < dialogDimensions.left ||
        e.clientX > dialogDimensions.right ||
        e.clientY < dialogDimensions.top ||
        e.clientY > dialogDimensions.bottom
    ) {
        dialog.close()
    }
})

// Prevent dialog from closing when clicking inside
dialog.querySelector(".dialog-content").addEventListener("click", e => {
    e.stopPropagation()
})

const swiper = new Swiper(".dialog-content", {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    spaceBetween: 16,
    pagination: {
        el: ".review-pagination",
        type: "fraction",
    },
    navigation: {
        nextEl: ".next-review",
        prevEl: ".prev-review",
    },
})
