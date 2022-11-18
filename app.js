const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


const scriptURL = "https://script.google.com/macros/s/AKfycbwKO0shShYDOX3SQhKdJKgiW-K2nC3m2hG0SuJyisr8NwFUYQ6MChI7ImhXEWrA0Y6s0w/exec"
const form = document.forms['submit-to-google-sheet']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => {
      msg.innerHTML= "Massage sent successfully"
      setTimeout(function(){
        msg.innerHTML = ""
      },5000)
      form.reset()
    })
    .catch(error => console.error('Error!', error.message))
})

