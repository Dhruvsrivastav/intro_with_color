function clickit() {
    var user = document.getElementById('username').value;
    if (user === "") {
        alert("Please enter your name first!");
        return;
    }
    document.getElementById("print").innerText = "Hello I'm " + user;
}
document.getElementById("username").addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        clickit();
    }
});

function clickthis(event) {
    const box = event.target;
    const color = box.id;
    if (box.style.backgroundColor === color) {
        box.style.backgroundColor = "";
    } else {
        box.style.backgroundColor = color;
    }
}