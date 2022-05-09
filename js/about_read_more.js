window.onload = function(e) {
    const readMoreBtn= document.getElementById("read_more_btn");
   readMoreBtn.addEventListener('click', showHide);

   function showHide( ) {
    var dots = document.getElementById("dots");
    var readMoreText = document.getElementById("read_more");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      readMoreBtn.innerHTML = "Read more";
      readMoreText.style.display = "none";
    } else {
      dots.style.display = "none";
      readMoreBtn.innerHTML = "Read Less";
      readMoreText.style.display = "inline";
    }
  }

}
