const testimonialSlider = document.querySelector(".partner-testimonials-cards")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

nextBtn.addEventListener("click", () => {
    testimonialSlider.append(testimonialSlider.firstElementChild)
})
prevBtn.addEventListener("click", () => {
    testimonialSlider.prepend(testimonialSlider.lastElementChild)
})
