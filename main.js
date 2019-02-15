document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector(".form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const input = document.querySelector(".nombres");
    alert(`Hola ${input.value}`)

  })
});
