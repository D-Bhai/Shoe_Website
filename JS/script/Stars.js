let stars = document.querySelectorAll(".bi-star, .bi-star-fill");

stars.forEach((star, index) => {
    star.addEventListener('click', () => {
        const isAlreadyFilled = star.classList.contains("bi-star-fill");

        stars.forEach((s, i) => {
            if (i <= index) {
                if (isAlreadyFilled && i === index) {
                    resetStar(s);
                } else if (!isAlreadyFilled) {
                    fillStar(s);
                }
            } else {
                resetStar(s);
            }
        });
    });
});

function fillStar(s) {
    s.classList.remove("bi-star");
    s.classList.add("bi-star-fill");
    s.style.color = "orange";
}

function resetStar(s) {
    s.classList.remove("bi-star-fill");
    s.classList.add("bi-star");
    s.style.color = "black";
}

let w = document.querySelector(".wrapper");
let l = document.querySelector(".bi-caret-left-square-fill");
let r = document.querySelector(".bi-caret-right-square-fill");

let scrollAmt = 300;

r.addEventListener("click",()=>{
    w.scrollLeft+=scrollAmt;
})

l.addEventListener("click",()=>{
    w.scrollLeft-=scrollAmt;
})