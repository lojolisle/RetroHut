window.onload = function(){
    var accordionToggle = document.getElementsByClassName("accordion-label");
    var i;

    for (i=0; i <accordionToggle.length; i++){  
        accordionToggle[i].addEventListener("click", function(){
            this.classList.toggle("active");
            var accordionContent = this.nextElementSibling;
            if (accordionContent.style.maxHeight) {
                accordionContent.style.maxHeight = null;
            } else {
                accordionContent.style.maxHeight = accordionContent.scrollHeight + "px";
            }
        });
    }
}