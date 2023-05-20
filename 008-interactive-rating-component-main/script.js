function validate() {

  const $form = document.querySelector('.rateForm')
  $form.addEventListener('submit', (e) => {
    $form.preventDefault()
  })

  const $formRating = document.rateForm.rating
  let valid = false
  let rateValue = ''

  for(let radio of $formRating) {
    if(radio.checked) {
      rateValue = radio.value
      valid = true
      break
    }
  }

  if(!valid) {
    alert('You need to select ONE option first!')
    return rateValue
  }
}