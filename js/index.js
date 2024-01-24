   
   //===================================start Slider  ============================================
   
   $(".openSlider").on("click", function () {
     $(".openSlider").css({ display: "none" });
     $("#sideMenu").animate({ width: "toggle" }, 300);
   });
   
   $(".closeButton").on("click", function () {
     $(".openSlider").css({ display: "inline" });
     $("#sideMenu").animate({ width: "toggle" }, 300);
   });
   
   

 // =================================== singers  ============================================

 $(function () {
  $(".col-md-6 p").eq(0).slideToggle(400);
 });
 
 $(".col-md-6 h2").eq(0).on("click", function () {
     $(".col-md-6 p").eq(0).slideToggle(500);
   });
 $(".col-md-6 h2").eq(1).on("click", function () {
     $(".col-md-6 p").eq(1).slideToggle(500);
     $(".col-md-6 p").eq(0).slideUp(500);
   });
 $(".col-md-6 h2").eq(2).on("click", function () {
     $(".col-md-6 p").eq(1).slideUp(500);
     $(".col-md-6 p").eq(2).slideToggle(500);
   });
 $(".col-md-6 h2").eq(3).on("click", function () {
     $(".col-md-6 p").eq(2).slideUp(500);
     $(".col-md-6 p").eq(3).slideToggle(500);
   });


   //=================================== count bown data ============================================
   let countDownDate = new Date("10 10 ,2024 23:59:59").getTime();
   let counter = setInterval(function () {
     let dateNow = new Date().getTime();
     let difference = countDownDate - dateNow;
     let days = Math.floor(difference / (1000 * 60 * 60 * 24));
     document.querySelector(".days").innerHTML = days < 10 ? `0${days} D ` : days +" D" ;
   
     let hours = Math.floor(
       (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
     );
     document.querySelector(".hours").innerHTML =
       hours < 10 ? `0${hours} H` : hours + " H";
   
     let minutes = Math.floor(
       (difference % (1000 * 60 * 60)) / (1000 * 60)
     );
     document.querySelector(".minutes").innerHTML =
       minutes < 10 ? `0${minutes} M ` : minutes + " M";
   
     let seconds = Math.floor((difference % (1000 * 60)) / 1000);
     document.querySelector(".seconds").innerHTML =
       seconds < 10 ? `0${seconds} S ` : seconds + " S";
     if (difference <= 0) {
       alert("Timed Out");
     }
   }, 1000);
  
   
 
 
   
   
   // ===================================textarea ============================================
   var maxCount = 100;
   var spanCounter = document.querySelector("#counter");
   var limitedTextArea = document.querySelector("textarea");
   


  limitedTextArea.addEventListener("keydown", function (e) {
    if (maxCount == 0 && e.key != "Backspace") {
      e.preventDefault();
      $(".spanText").text("your available character finished");
      $(".spanText").css("color", "red");
  
      return;
    }
    if (maxCount == 100 && e.key == "Backspace") {
      e.preventDefault();
      return;
    }
    if (e.key == "Backspace") {
      maxCount = maxCount + 1;
      spanCounter.innerHTML = maxCount;
      $(".spanText").text("Characyer Reamining:");
      $(".spanText").css("color", "black");
    } else {
      $(".spanText").text("Characyer Reamining:");
      $(".spanText").css("color", "black");
      maxCount = maxCount - 1;
      spanCounter.innerHTML = maxCount;
    }
  });






  
   
  
   
 
  
  
  