const tabs = document.querySelectorAll(".providers-tabs>.tab")
const slider = document.querySelector(".providers-tabs")

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("tab-active"))
        tab.classList.add("tab-active")

        const { offsetWidth, offsetLeft } = tab

        slider.style.setProperty("--_slide-width", offsetWidth + "px")
        slider.style.setProperty("--_slide-left", offsetLeft + "px")

        // const activeTabValue = tab.dataset.value
    })
})

// Initial load
const initialActiveTab = document.querySelector(".tab-active")
if (initialActiveTab) {
    const { offsetWidth, offsetLeft } = initialActiveTab
    slider.style.setProperty("--_slide-width", offsetWidth + "px")
    slider.style.setProperty("--_slide-left", offsetLeft + "px")
}
