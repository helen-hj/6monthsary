function openLetter() {
    const letter = document.getElementById("letter");
    const button = document.querySelector(".open-btn");
    const isOpen = letter.classList.toggle("show");

    if (button) {
        button.textContent = isOpen ? "💌 Close My Letter" : "💌 Open My Letter";
    }
}