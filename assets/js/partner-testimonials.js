const testimonialSlider = document.querySelector(".partner-testimonials-cards")
const nextBtn = document.querySelector("#nextBtn")
const prevBtn = document.querySelector("#prevBtn")

prevBtn.addEventListener("click", () => {
    testimonialSlider.append(testimonialSlider.firstElementChild)
})
nextBtn.addEventListener("click", () => {
    testimonialSlider.scrollLeft += testimonialSlider.clientWidth
})
