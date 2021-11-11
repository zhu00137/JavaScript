//form element events


 document.querySelector('#fName').addEventListener("blur", function(){
     if(this.value !== ""){
         fNameError.innerHTML = "";
     }
 });

 document.querySelector('#lName').addEventListener("blur", function(){
     if(this.value !== ""){
         lNameError.innerHTML = "";
    }
});

 document.querySelector('#address1').addEventListener("blur", function(){
     if(this.value !== ""){
         address1Error.innerHTML = "";
     }
 });

 document.querySelector('#city').addEventListener("blur", function(){
     if(this.value !== ""){
         cityError.innerHTML = "";
     }
 });

 document.querySelector('#province').addEventListener("click", function(){
     if(profile.province.options.selectedIndex !== -1){
         provinceError.innerHTML = "";
     }
 });

 document.querySelector('#country').addEventListener("click", function(){
     if(profile.country.options.selectedIndex !== -1){
         countryError.innerHTML = "";
     }
 });

document.profile.addEventListener("submit",validateProfile);
