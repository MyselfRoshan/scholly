const institutionsWrapper = document.querySelector(".trusted-institutions")
const INSTITUTION_COUNT = institutionsWrapper.childElementCount
const institutions = document.querySelectorAll(".institutions")

institutionsWrapper.style.setProperty(
    "--_institution-quantity",
    INSTITUTION_COUNT,
)

institutions.forEach((institution, index) => {
    institution.style.setProperty("--_institution-position", index + 1)
})
