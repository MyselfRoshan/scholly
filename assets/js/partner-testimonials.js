// import swiper from "https://cdn.jsdelivr.net/npm/swiper@11.1.14/+esm"

const testimonialSlider = document.querySelector(".partner-testimonials-cards")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

nextBtn.addEventListener("click", () => {
    testimonialSlider.append(testimonialSlider.firstElementChild)
})

prevBtn.addEventListener("click", () => {
    testimonialSlider.prepend(testimonialSlider.lastElementChild)
})
