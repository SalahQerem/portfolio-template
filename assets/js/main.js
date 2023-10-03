const navbar = document.querySelector(".navbar");
const headerContentSpan = document.querySelector(".header-content span");
const loading = document.querySelector(".loading");
const backToTop = document.querySelector(".back-to-top");
const aboutSection = document.querySelector(".about");
const navlinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", function() {
    if(this.window.scrollY > headerContentSpan.offsetTop){
        navbar.style.backgroundColor = "#fff";
    }else{
        navbar.style.backgroundColor = "transparent";
    }
    if(this.window.scrollY > aboutSection.offsetTop){
        backToTop.classList.remove("opacity-0", "invisible");
    }else{
        backToTop.classList.add("opacity-0", "invisible");
    }
})

window.addEventListener("load", function() {
    this.setTimeout(function() {
        loading.classList.add("opacity-0", "invisible");
        document.body.style.overflow = "auto";
        navbar.classList.remove("z-2");
    }, 2000)
})

backToTop.addEventListener("click", function(){
    window.scroll({ top:0, behavior:"smooth"});
});

for(let i = 0; i < navlinks.length; i++){
    navlinks[i].addEventListener("click", function(e){
        e.preventDefault();
        let targetSection = document.querySelector(this.getAttribute("href"));
        document.querySelector(".nav-link.active").classList.remove("active");
        navlinks[i].classList.add("active");
        window.scroll({top:targetSection.offsetTop, behavior:"smooth"})
    })
}