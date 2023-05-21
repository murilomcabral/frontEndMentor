function sendData(event) {
  event.preventDefault()
  const formData = new FormData(document.forms.rateForm)
  const data = new Object(...formData.entries())
  console.log(data)
}