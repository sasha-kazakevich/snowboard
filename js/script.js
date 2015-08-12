$(document).ready(function(){
    $("#menu").on("click","a",function(event){
        event.preventDefault();
        var id = $(this).attr("href"),
            top = $(id).offset().top;
        $("body,html").animate({scrollTop: top},800);
    });
    $(window).scroll(function(){
        if($(this).scrollTop() > 50){
            $("#button-up").fadeIn();
        }else $("#button-up").fadeOut();
    });
    $("#button-up").click(function(){
        $("html,body").animate({ scrollTop: 0}, 600);
        return false;
    });
});

$(window).load(function() {
    $("#snowboards").flexisel({
        visibleItems: 5,
        animationSpeed: 550,           
        pauseOnHover: true,
        enableResponsiveBreakpoints: true,
        responsiveBreakpoints: { 
            portrait: { 
                changePoint:480,
                visibleItems: 1
            }, 
            landscape: { 
                changePoint:640,
                visibleItems: 3
            },
            tablet: { 
                changePoint:790,
                visibleItems: 3
            }
        }
    }); 
});

(function(){
var imageArray = ["image/slider1.png","image/slider2.png","image/slider3.png","image/slider4.png"],
    image = document.getElementById("slider"),
    imageIndex = 1,
    run;

function slider(){
	image.src = imageArray[imageIndex];
	imageIndex++;
	if (imageIndex >= imageArray.length)
		imageIndex = 0;
	}

run = setInterval(slider,5000);
})();

(function(){
var logo = document.getElementById("logo-menu"),
    menu = document.getElementById("menu"),
    det = document.getElementById("details"),
    sliderDet = document.getElementById("slider-det"),
    exit = document.getElementById("exit");


    det.addEventListener("click", function(){
        sliderDet.style.display = "block";
    });
        exit.addEventListener("click", function(){
        sliderDet.style.display = "none";
    });
        logo.addEventListener("click", function(){
        var val = menu.style.display;
        if (val === "") {
        menu.style.display = "block";
        logo.src = "image/close2.png";
    } else {
        menu.style.display = "";
        logo.src = "image/menu.png"
    }
    });
        menu.addEventListener("click", function(e){
        if (e.target.tagName === "A") {
        menu.style.display = "";
        logo.src = "image/menu.png"
    }
    });
})();