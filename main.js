const hamburgerEl = document.querySelector(".hamburger-menu");
const showMenyu = document.querySelector(".show-menu");
const navbarEl = document.querySelector(".navbar");
const bottomContainer = document.querySelector(".bottom-container");



hamburgerEl.addEventListener("click", () => {

    showMenyu.classList.toggle("active");
})

window.addEventListener("scroll", () => {

    if (window.scrollY > bottomContainer.offsetTop - navbarEl.offsetHeight - 50) {

        navbarEl.classList.add("color");
        hamburgerEl.querySelectorAll("div").forEach(child=>{
            child.style.backgroundColor ="white"
        })
        showMenyu.style.backgroundColor = "black";
        showMenyu.querySelectorAll("ul>li>a").forEach(child => {
            child.style.color = "white";
        });

    } else {
        navbarEl.classList.remove("color");
        showMenyu.style.backgroundColor = "white";
        hamburgerEl.querySelectorAll("div").forEach(child=>{
            child.style.backgroundColor ="black"
        })
        showMenyu.querySelectorAll("ul>li>a").forEach(child => {
            child.style.color = "black";
        });
    }
})
