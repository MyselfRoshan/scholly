const tabs = document.querySelectorAll(".courses-tabs>.tab")
const slider = document.querySelector(".courses-tabs")
const coursesList = document.querySelector("#coursesList")
const courses = {
    recommended: [
        {
            img: "./assets/images/courses/course-1.svg",
            title: "Science",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-2.svg",
            title: "Computer Science",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-3.svg",
            title: "Management",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-4.svg",
            title: "Medical",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-5.svg",
            title: "Engineering",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-6.svg",
            title: "Arts & Creative",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-7.svg",
            title: "Robotics Science",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-8.svg",
            title: "Hospitality",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-9.svg",
            title: "Nursing",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-10.svg",
            title: "Bio Engineering",
            available: 123,
        },
    ],
    top_popular: [
        {
            img: "./assets/images/courses/course-6.svg",
            title: "Arts & Creative",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-7.svg",
            title: "Robotics Science",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-8.svg",
            title: "Hospitality",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-9.svg",
            title: "Nursing",
            available: 123,
        },
        {
            img: "./assets/images/courses/course-10.svg",
            title: "Bio Engineering",
            available: 123,
        },
    ],
}

const createCourseItem = course => {
    const item = document.createElement("li")
    item.classList.add("course-item")
    item.innerHTML = `
    <div class="course-img">
        <img src="${course.img}" alt="${course.title}" />
    </div>
    <h3 class="course-title">${course.title}</h3>
    <p class="course-availability">
        ${course.available} Courses
        <svg width="12" height="13" viewBox="0 0 12 13" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <rect y="0.5" width="12" height="12" fill="white" />
            <path
                d="M3.88365 10.2255L7.60963 6.50045L3.8832 2.77537C3.7056 2.59777 3.7056 2.31046 3.8832 2.13286C4.0608 1.95571 4.34855 1.95571 4.52615 2.13286L8.57361 6.17897C8.75121 6.35612 8.75121 6.64388 8.57361 6.82103L4.52615 10.8671C4.34855 11.0443 4.06035 11.0443 3.88275 10.8671C3.70605 10.6904 3.70605 10.4027 3.88365 10.2255Z"
                fill="#262F45" />
        </svg>
    </p>
`
    return item
}

const updateJoinedPartnersList = activeTabValue => {
    coursesList.innerHTML = ""
    console.log(Object.keys(courses), activeTabValue)
    const keyExists = Object.keys(courses).includes(activeTabValue)
    if (keyExists) {
        courses[activeTabValue].forEach(course => {
            const item = createCourseItem(course)
            coursesList.appendChild(item)
        })
    }
}

const slide = document.querySelector(".slide")
tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("tab-active"))
        tab.classList.add("tab-active")

        const { offsetWidth, offsetLeft } = tab

        slider.style.setProperty("--_slide-width", offsetWidth + "px")
        slider.style.setProperty("--_slide-left", offsetLeft + "px")

        const activeTabValue = tab.dataset.value
        updateJoinedPartnersList(activeTabValue)
    })
})

// Initial load
const initialActiveTab = document.querySelector(".tab-active")
if (initialActiveTab) {
    const { offsetWidth, offsetLeft } = initialActiveTab
    slider.style.setProperty("--_slide-width", offsetWidth + "px")
    slider.style.setProperty("--_slide-left", offsetLeft + "px")

    updateJoinedPartnersList(initialActiveTab.dataset.value)
}
