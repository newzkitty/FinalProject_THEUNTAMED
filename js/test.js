const header = document.querySelector
    (".main-header");
window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;
    if (scrollPos > 10) {
        header.classList.add('scrolled');

    }
    else {
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

        
        $("#Text").css("transform","translateY(" +(currentScrollTop*0.3)+ "px)");
       
    });

});


      

