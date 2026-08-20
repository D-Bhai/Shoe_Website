// Lazy loading of image
let imgs = document.querySelectorAll(".wrapper .item .item-top img");

let observer = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                observer.unobserve(img);
            }
        });
    },
    {
        root: null,
        threshold: 0.05,
    }
);
imgs.forEach((img) => {
    observer.observe(img);
});