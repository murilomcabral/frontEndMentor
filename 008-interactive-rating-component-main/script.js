const $fbValueList = document.querySelectorAll('.fb-value li')
const arr = Array.from($fbValueList)

const $rateState = document.querySelector('.rate-state')
const $thankYouState = document.querySelector('.thank-you-state')

const $showRated = document.querySelector('.rated')


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

// svg animation

const linePath = document.querySelector('.svg-line path')
const pathLen = linePath.getTotalLength()
console.log(pathLen)
linePath.style.cssText = `
fill:none;
stroke:#e6e6e6;
stroke-width:1.1px;
stroke-dasharray:${pathLen / 100}, 5.5, 0, 0;
`