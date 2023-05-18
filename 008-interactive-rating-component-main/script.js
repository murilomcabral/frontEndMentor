const $fbValueList = document.querySelectorAll('.fb-value li')

const $rateState = document.querySelector('.rate-state')
const $thankYouState = document.querySelector('.thank-you-state')

const $showRated = document.querySelector('.rated')

const arr = Array.from($fbValueList)
console.log(arr)

let pointsRated = 0

arr.forEach((e) => {
  e.addEventListener('click', (event) => {
    if (event.target.hasAttribute('checked')) {
      event.target.removeAttribute('checked')
    } else {
      arr.forEach((elem) => elem.removeAttribute('checked'))
      event.target.setAttribute('checked','')
      pointsRated = event.target.innerText
    }
  })
});

function thankYouState() {
  arr.forEach((e) => {
    if (e.hasAttribute('checked')) {
      $rateState.style.display = 'none'
      $thankYouState.style.display = 'grid'
      $showRated.textContent = pointsRated
    }
  })
}