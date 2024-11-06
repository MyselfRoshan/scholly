import Swiper from "../../node_modules/swiper/swiper-bundle.min.mjs"

// const swipper = new Swiper("#trustedInstitutionSlider", {
const swipper = new Swiper("#trustedInstitutionSlider", {
    loop: true,
    // pagination: {
    //     el: ".review-pagination",
    //     type: "fraction",
    // },
    spaceBetween: 32,
    // resistance: true,
    navigation: {
        prevEl: "#prevInstitutions",
        nextEl: "#nextInstitutions",
    },
})

// const swipper1 = new Swiper(".swiper", {
//     // loop: true,
//     spaceBetween: 16,
//     // pagination: {
//     //     el: ".review-pagination",
//     //     type: "fraction",
//     // },
//     navigation: {
//         nextEl: ".swiper-button-next",
//         prevEl: ".swiper-button-prev",
//         // nextEl: "#nextInstitutions",
//         // prevEl: "#prevInstitutions",
//     },
// })
