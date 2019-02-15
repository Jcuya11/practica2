document.addEventListener('DOMContentLoaded', function(){
  const form = document.querySelector("form");

  form.addEventListener("submit", function(event){
    event.preventDefault();
    const input = document.querySelector("input");
    alert(`Hola ${input.value}`)
  })
});
