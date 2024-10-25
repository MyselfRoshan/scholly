document.addEventListener("DOMContentLoaded", function () {
    const faqQuestions = document.querySelectorAll(".faq-question")
    const faqItems = document.querySelectorAll(".faq-item")

    faqQuestions.forEach((question, index) => {
        question.addEventListener("click", () => {
            const isOpen = question.parentNode.classList.contains("active")

            // Close all other answers
            faqItems.forEach(q => q.classList.remove("active"))
            faqItems.forEach(q => console.log(q))

            // Toggle current answer
            if (!isOpen) {
                question.parentNode.classList.add("active")
            }
        })

        // Open the second question by default
        if (index === 0) {
            question.parentNode.classList.add("active")
        }
    })
})
