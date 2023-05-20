function validate() {
  let valid = false
  const $form = document.rateForm.rating
  let vote = ''

  for(let radio of $form) {
    if(radio.checked) {
      vote = radio.value
      valid = true
      break
    }
  }

  if(valid) {
    showFinal()
  } else {
    alert('You need to select ONE option first!')
  }
}

function showFinal() {
  const $thankYouState = document.querySelector('.thank-you-state')
  const $rateState = document.querySelector('.rate-state')
  $thankYouState.removeAttribute('style')
  $rateState.style.cssText = 'display:none;visibility:hidden;'
}

// svg animation
const linePath = document.querySelector('.svg-line path')
const pathLen = linePath.getTotalLength()
async function animate() {
  linePath.style.cssText = `
  fill:none;
  stroke:#e6e6e6;
  stroke-width:1.1px;
  stroke-dasharray:${pathLen / 100}, 5.5, 0, 0;
  animation: dashOffset 7s infinite linear;
  `
}