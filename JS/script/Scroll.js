let row = document.querySelectorAll(".ROW");

let scrollAmt = 300;

row.forEach(data => {
    let w = data.querySelector(".wrapper");
    let l = data.querySelector(".bi-caret-left-square-fill");
    let r = data.querySelector(".bi-caret-right-square-fill");

    r.addEventListener("click", () => {
        w.scrollLeft += scrollAmt;
    })

    l.addEventListener("click", () => {
        w.scrollLeft -= scrollAmt;

    })
});
