let cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", function (xy) {
    cursor.style.left = xy.clientX + "px";
    cursor.style.top = xy.clientY + "px";
})