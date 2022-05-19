const imageModal = document.querySelectorAll(".image")

imageModal.forEach((btn)=> {
    btn.onclick = (()=> {
        const modal = btn.getAttribute("data-modal")
        document.getElementById(modal).style.display = 'flex';
    })
})

window.onclick = function (e) {
    if (e.target.className === "modal") {
        e.target.style.display = "none"
    }
}