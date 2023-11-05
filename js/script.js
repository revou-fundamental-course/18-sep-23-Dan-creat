let slider = document.getElementById("slider");
let images = slider.getElementsByTagName("img");
let currentImageIndex = 0;

function startSlideShow() {
   setInterval(() => {
      images[currentImageIndex].style.opacity = 0;
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.opacity = 1;
   }, 3000);
}

startSlideShow();