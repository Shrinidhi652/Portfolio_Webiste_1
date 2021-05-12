const modal = document.querySelector(".modal");
const previews = document.querySelectorAll(".img-container img");
const original = document.querySelector(".full-img");
const nav = document.querySelectorAll(".nav");

previews.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Dyanimic image changing
        const originalsrc = preview.getAttribute("data-original");
        original.src = originalsrc
    });

    nav.forEach(nav => {
        preview.addEventListener("click", () => {
            nav.classList.add("close");
        });

        modal.addEventListener("click", (e) => {
            if (e.target.classList.contains("modal")) {
                nav.classList.remove("close");
            }
        });
    });

});

modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
});





