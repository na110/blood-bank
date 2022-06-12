
// click to go section
$(".nav-item").click(function(){
    let ref=$(this).attr("href")
    let test= $(ref).offset().top
    $("body,html").animate({scrollTop:`${test}`},1000)
  })
  
  
  // scroll change nav
  let myOffset=$("#about").offset().top;
  console.log(myOffset)
  $(window).scroll(function(){
      let wScroll =$(window).scrollTop()
      if(wScroll>=myOffset){
  
          $("nav").css("backgroundColor","white")
          $("nav").css("color","white")
          $("nav").css("boxShadow"," 3px 3px 5px #a9aeb2")
          $("nav").css("borderRadius","10px")
      }
      else{
        $("nav").css("backgroundColor","transparent") 
        $("nav").css("boxShadow"," none")
      }
  }
  
  
  )


//about

  var windowBottom = $(this).scrollTop() + $(this).innerHeight();
  $(".fade").addClass('animate__animated  animate__rotateInDownLeft  animate__rotateInDownRight animate__delay-1s',1000,function(){

      $(".fade").each(function() {
          /* Check the location of each desired element */
          var objectBottom = $(this).offset().top + $(this).outerHeight();
          
          /* If the element is completely within bounds of the window, fade it in */
          if (objectBottom < windowBottom) { //object comes into view (scrolling down)
            if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
          } else { //object goes out of view (scrolling up)
            if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
          }
        });
  })










// testimonial starting 
$(document).ready(function () {

    $('.client-single').on('click', function (event) {
       event.preventDefault();

       var active = $(this).hasClass('active');

       var parent = $(this).parents('.testi-wrap');

       if (!active) {
           var activeBlock = parent.find('.client-single.active');

           var currentPos = $(this).attr('data-position');

           var newPos = activeBlock.attr('data-position');

           activeBlock.removeClass('active').removeClass(newPos).addClass('inactive').addClass(currentPos);
           activeBlock.attr('data-position', currentPos);

           $(this).addClass('active').removeClass('inactive').removeClass(currentPos).addClass(newPos);
           $(this).attr('data-position', newPos);

       }
   });

}(jQuery));


// testimonial ending




// donor script display with effects
let donorOffset = $("#donors").offset().top;
$(window).scroll(function(){
    let wScroll = $(window).scrollTop();
    if(wScroll >= (donorOffset -400)){
        $(".item").eq(0).slideDown(100,function(){
            $(".item").eq(1).show(1000,function(){
                $(".item").eq(2).slideDown(1000,function(){
                    $("#circleTwo").fadeIn(1000,function(){
                        $("#circleOne").slideDown(500);
                        $("#circleThree").slideDown(500,function(){
                            $(".detail").slideDown(500);
                        });
                    });
                });
                
            });
        });
    }
});

//counter
let counterElem = document.getElementsByClassName("counter");
let count = [0,0,0,0];
let maxCount = [2578,2100,3500,1320];
var interv =[];
for(let i =0; i< counterElem.length;i++){
    interv[i] = setInterval(function() {
        incrementCount(i)},100);
}

function incrementCount(index){
    count[index]++;
    if(count[index] >= maxCount[index]){
        clearInterval(interv[index]);
        
    }
    counterElem[index].innerHTML = count[index];
    
}
