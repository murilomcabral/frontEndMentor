const fbValueList = document.querySelectorAll('.fb-value li')
const arr = Array.from(fbValueList)
console.log(arr)

let points =
  arr.forEach((e) => {
    e.addEventListener('click', (event) => {
      arr.forEach((elem) => elem.removeAttribute('checked'))
      event.target.setAttribute('checked','')
      console.log(event.target.innerText)
      return event.target.innerText
    })
  });

