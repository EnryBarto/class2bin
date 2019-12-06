// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
}
  
// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
// Thumbnail image controls
function currentSlide() {
    showSlides();
}
  
function showSlides() {
    var slides = document.getElementsByClassName("mySlides");
    slides[0].style.display = "block";
}