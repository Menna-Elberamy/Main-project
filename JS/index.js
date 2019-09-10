

//loading start function
$(document).ready(function(){
    $("#loading").fadeOut(2000);
    $("#ecg").fadeOut(2000 , function(){
        $("body").css("overflow" , "auto");
    })
})
    


//owl crasuol for parients section1
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:15,
    nav:true,
    autoplay : true,
    navigation: true,
    center:true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    navContainer: '.main-content .custom-nav',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})

var btnDonor=document.getElementById(btndonor);
                                    
btnDonor.onclick=function()
{
    document.getElementById(lightbox).style.display="flex";
}