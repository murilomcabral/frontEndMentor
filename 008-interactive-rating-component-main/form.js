function sendData(e) {
  e.preventDefault()
  const $formElement = document.forms.rateForm
  const formData = new FormData($formElement)
  const obj = Object.fromEntries(formData)

  localStorage.clear()
  localStorage.setItem(Object.keys(obj),Object.values(obj))
  
  window.location.assign('thank-you-state.html')
}