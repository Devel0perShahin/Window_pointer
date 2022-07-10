window.addEventListener("mousemove", (e) => {
    document.querySelector(".X_here").textContent = e.clientX;
    document.querySelector(".Y_here").textContent = e.clientY;
})


window.addEventListener("mousemove", (e) => {
    let Line_Y = document.querySelector(".Line_Y");
    let Line_X = document.querySelector(".Line_X");
    let X = e.x;
    let Y = e.y;
    Line_Y.style.left = X + "px";
    Line_X.style.top = Y + "px";
})