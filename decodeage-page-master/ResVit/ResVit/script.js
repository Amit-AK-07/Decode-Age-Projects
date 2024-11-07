function increment() {
    document.getElementById('demoInput').stepUp();
 }
 function decrement() {
    document.getElementById('demoInput').stepDown();
 }



//  var video = document.getElementById("video");
//   video.addEventListener("click", function(event) { 
//         if (video.paused == true) {
//              video.play();
//         }
//         else{
//              video.pause();
//         }
//   });


const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
      button.addEventListener('click', () => {
        // Toggle active state for this button and its content
        button.classList.toggle('active');
        const content = button.nextElementSibling;
        content.classList.toggle('active');
      });
    });