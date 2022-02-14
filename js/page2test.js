const header = document.querySelector
(".main-header");
window.addEventListener ('scroll', ()=>{
    const scrollPos = window.scrollY;
    if(scrollPos>10){
        header.classList.add('scrolled');

    }
    else{
        header.classList.remove('scrolled')
    }
})

$(document).ready(function () {

    $(window).scroll(function () {
        let currentScrollTop = $(this).scrollTop();

        //เอาไว้ดูค่าตรงส่วนconsole 0จะเป็นบนสุด 
        console.log(currentScrollTop);
        if (currentScrollTop > 1) {
            $(".main-header").addClass("scroll-active");
        }

        else {
            $(".main-header").removeClass("scroll-active");
        }
    });

}); 


function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 80;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }

};

window.addEventListener("scroll", reveal);

