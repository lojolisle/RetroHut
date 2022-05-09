window.onload = function() {
   const submitForm = document.getElementsByTagName('form');
   console.log(submitForm)
   const submitButton = document.getElementById('submit') ;

   //form inputs
   var reservationForm = document.forms.reservationForm;
   
   const inputName = reservationForm.Name;
   const people = reservationForm.People;
   const reservationDate = reservationForm.date;
   const errMsg = document.getElementsByClassName('errMsg');
   console.log('chk label', reservationForm.getElementsByTagName('label'))
 
   const successMsg = document.getElementById('success-msg');
   console.log('succ', successMsg)
   submitButton.onclick = processForm;

   function processForm() {
      var isValid = validate();
      if (isValid) {
         successMsg.innerHTML = "Congratulation " + inputName.value +"!! Your table has been succesfully reserved";
      }
      return false;
   }

   function validate() {
      var isValid = true;
      // validate name
      if (inputName.value == "") {
         inputName.style.border = "3px solid red";
         inputName.focus();
         isValid = false;
         return false;
      } else {
         inputName.style.border = "solid 2px #00FFFF "
      }
      
      console.log('peope value ', people.value)
      if (people.value == "") {
         people.style.border = "3px solid red";
         isValid = false;
         return false;
      } else {
         people.style.border  = "solid 2px #00FFFF ";
      }
      if (reservationDate.value == "") {
         reservationDate.style.border = "3px solid red";
         reservationDate.focus();
         isValid = false;
         return false;
      } else {
         reservationDate.style.border = "solid 2px #00FFFF "
      }

      if (isValid == true) {
         return true;
     }

   }
   // submitButton.onclick = (e) => {
   //    if(submitForm[0].checkValidity()) {
   //       e.preventDefault();
   //       successMsg.innerHTML = "Congratulation!! Your table has been succesfully reserved";
   //    } 
   // }
}