// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();



//search event listener
let url = "/listings/search/";
let form = document.querySelector("#searching");
let select = document.querySelector("#country");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  let country = select.value;
  let completeUrl = url + country;
  form.setAttribute("action", `${completeUrl}`);
  form.submit();
});



//for showing ttoal Rs. after total taxes
let toggle = document.querySelector("#switchCheckDefault");
let infoTax = document.querySelectorAll(".info-tax");
toggle.addEventListener("click", () => {
    for(info of infoTax){
        if(info.style.display != "inline"){
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
});