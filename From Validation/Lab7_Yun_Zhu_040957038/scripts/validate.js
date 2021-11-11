//validate module
function validateProfile(e){
  e.preventDefault();
  var valid=true;

  if(profile.firstName.value===""){
     document.querySelector('#fNameError').innerHTML="Please enter a first name.";
     valid=false;
   }

   if(profile.lastName.value===""){
     document.querySelector('#lNameError').innerHTML="Please enter a last name.";
     valid=false;
   }

   if(profile.address1.value===""){
     document.querySelector('#address1Error').innerHTML="Please enter an address1.";
     valid=false;
   }


   if(profile.city.value===""){
     document.querySelector('#cityError').innerHTML="Please enter a city.";
     valid=false;
   }

   if(document.getElementById("province").selectedIndex===0){
     valid=false;
     document.querySelector('#provinceError').innerHTML="Please select a province.";

   }

   if(document.getElementById("country").selectedIndex===0){
     valid=false;
     document.querySelector('#countryError').innerHTML="Please select a country.";

   }

   if(valid){
    alert("Thank you!");
   }

  return valid;
}
