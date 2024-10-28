const tabs = document.querySelectorAll(".tab")
const slider = document.querySelector(".joined-partners-tabs")

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        console.log(tab.dataset.value)
        tabs.forEach(tab => tab.classList.remove("tab-active"))
        tab.classList.add("tab-active")
        slider.style = `--_tab-index: ${index}`
    })
})
