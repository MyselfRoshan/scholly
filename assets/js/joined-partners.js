const tabs = document.querySelectorAll(".tab")
const slider = document.querySelector(".joined-partners-tabs")
const joinedPartnersList = document.querySelector("#joinedPartnersList")
const joinedPartners = [
    {
        universities: {
            img: [
                "./assets/images/joined-partners/logo-1.png",
                "./assets/images/joined-partners/logo-2.png",
                "./assets/images/joined-partners/logo-3.png",
                "./assets/images/joined-partners/logo-4.png",
                "./assets/images/joined-partners/logo-5.png",
                "./assets/images/joined-partners/logo-6.png",
                "./assets/images/joined-partners/logo-7.png",
                "./assets/images/joined-partners/logo-8.png",
                "./assets/images/joined-partners/logo-9.png",
                "./assets/images/joined-partners/logo-10.png",
                "./assets/images/joined-partners/logo-11.png",
                "./assets/images/joined-partners/logo-12.png",
            ],
        },
    },
    {
        pathway: {
            img: [
                "./assets/images/joined-partners/logo-1.png",
                "./assets/images/joined-partners/logo-2.png",
                "./assets/images/joined-partners/logo-3.png",
                "./assets/images/joined-partners/logo-4.png",
            ],
        },
    },
    {
        tafe: {
            img: [
                "./assets/images/joined-partners/logo-1.png",
                "./assets/images/joined-partners/logo-2.png",
                "./assets/images/joined-partners/logo-3.png",
                "./assets/images/joined-partners/logo-4.png",
                "./assets/images/joined-partners/logo-5.png",
                "./assets/images/joined-partners/logo-6.png",
                "./assets/images/joined-partners/logo-7.png",
                "./assets/images/joined-partners/logo-8.png",
            ],
        },
    },
]

const createJoinedPartnerItem = imgSrc => {
    const item = document.createElement("li")
    item.classList.add("joined-partner-item")

    const img = document.createElement("img")
    img.src = imgSrc
    img.alt = ""
    item.appendChild(img)

    return item
}

const updateJoinedPartnersList = activeTabValue => {
    joinedPartnersList.innerHTML = ""
    const partners = joinedPartners.find(
        partner => Object.keys(partner)[0] === activeTabValue,
    )
    if (partners) {
        partners[activeTabValue].img.forEach(imgSrc => {
            const item = createJoinedPartnerItem(imgSrc)
            joinedPartnersList.appendChild(item)
        })
    }
}

tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("tab-active"))
        tab.classList.add("tab-active")
        slider.style.setProperty("--_tab-index", index)

        const activeTabValue = tab.dataset.value
        updateJoinedPartnersList(activeTabValue)
    })
})

// Initial load
const initialActiveTab = document.querySelector(".tab-active")
if (initialActiveTab) {
    updateJoinedPartnersList(initialActiveTab.dataset.value)
}
