import { tns } from "../../node_modules/tiny-slider/src/tiny-slider.js"

let slider = tns({
    container: "#trustedInstitutionSlider",
    items: 6,
    edgePadding: 32,
    gutter: 32,
    autoWidth: true,
    slideBy: "page",
    speed: 400,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 10000,
    swipeAngle: false,
    prevButton: "#prevInstitutions",
    nextButton: "#nextInstitutions",
    lazyload: true,

    responsive: {
        // 1024: {
        //     items: 4,
        // },
        1200: {
            items: 6,
        },
    },
    // mouseDrag: true,
})

const updateSlideInfo = ({ slideCount, displayIndex, slideBy }) => {
    const currentSlide = document.querySelector(
        "#trustedInstitutionSliderPagination .currentSlide",
    )
    const totalSlides = document.querySelector(
        "#trustedInstitutionSliderPagination .totalSlides",
    )
    const currentSlideValue = 4 - (slideCount - displayIndex + 1) / slideBy
    const totalSlidesValue = slideCount / slideBy

    if (currentSlide) currentSlide.innerText = currentSlideValue
    if (totalSlides) totalSlides.innerText = totalSlidesValue
}
// On initial load
updateSlideInfo(slider.getInfo())
// On slide change
slider.events.on("indexChanged", info => updateSlideInfo(info))
