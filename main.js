const btnArr = document.querySelectorAll(".card-btn")

console.log(btnArr)


btnArr.forEach((btn) => {
    btn.addEventListener("click", () => {
        console.log(btn)

        btn.style.color = "red"
    })
})