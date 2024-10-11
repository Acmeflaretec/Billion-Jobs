const scriptURL = 'https://script.google.com/macros/s/AKfycbx7mbKA42bd1lO1-VxGTxMzNAiU6XEW2QpKoyP-7W2aRFoytrOeokunY36R7v873n7fSw/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})

