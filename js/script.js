
(function ($) {
  "use strict";
  $(document).ready(function () {
    $(".untoldcoding-falling").sakura("start", {
      blowAnimations: ["blow-soft-left"],
      className: "sakura",
      fallSpeed: 2.5,
      maxSize: 12,
      minSize: 9,
      newOn: 250,
    });
  });
})(jQuery);


$(document).on("click", function (event) {
  // Check if the click was inside the .carousel-container
  if ($(event.target).closest('.carousel-container').length) {
    
  } else {
    var audio = document.getElementById("my_audio");
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }
});

// Pause audio function
var countDownDate = new Date("May 19, 2025 06:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;

  if (distance < 0) {
    clearInterval(x);
    document.getElementById("time").innerHTML = "Wedding Completed!!";
    return; // Ensure the code stops running once the timer ends
  }

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Update the countdown display
  document.getElementById("time").innerHTML =
    "<div class='container'>" +
    "<div class='days block'>" + days + "<br>Days</div>" +
    "<div class='hours block'>" + hours + "<br>Hours</div>" +
    "<div class='minutes block'>" + minutes + "<br>Minutes</div>" +
    "<div class='seconds block'>" + seconds + "<br>Seconds</div>" +
    "</div>";
}, 1000);


var styles = [
  "background: linear-gradient(#D33106, #571402)",
  "border: 1px solid red",
  "color: white",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 0.3)",
  "box-shadow: 0 2px 0 rgba(255, 255, 255, 0.4) inset, 0 5px 3px -5px rgba(0, 0, 0, 0.5), 0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset",
  "line-height: 40px",
  "text-align: center",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles1 = [
  "color: #FF6C37",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

var styles2 = [
  "color: teal",
  "display: block",
  "text-shadow: 0 2px 0 rgba(0, 0, 0, 1)",
  "line-height: 40px",
  "font-weight: bold",
  "font-size: 32px",
].join(";");

console.log("\n\n%c SAVE THE DATE: 14th Feb, 2021", styles);


function showToast() {
  var toast = document.getElementById("toast");
  toast.classList.add("show");
  setTimeout(function() {
      toast.classList.remove("show");
  }, 3000);
}

window.onload = function() {
  showToast();
};


// Gallery Code Start

var currentSlide = 0;

function moveSlide(direction) {
  var slides = document.querySelectorAll(".carousel-item");
  currentSlide += direction;

  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  var slideWidth = slides[0].offsetWidth;
  var slideContainer = document.querySelector(".carousel-slide");
  slideContainer.style.transform = "translateX(" + -currentSlide * slideWidth + "px)";
}


// Gallery Code End 