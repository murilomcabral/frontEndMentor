const $finalResult = document.querySelector('.final-result')

const $summary = document.querySelectorAll('.categories .points')

async function logJSONData() {
  const response = await fetch('data.json')
  const jsonData = response.json()

  jsonData.then((data) => {
    let med = 0
    for (let i = 0; i < $summary.length; i++) {
      $summary[i].textContent = data[i].score
      med += data[i].score
    }
    med = Math.floor(med/$summary.length)

    let startValue = 0;
    let speed = 500;
    
    const interval = speed / med;
    const counter = setInterval(() => {
      startValue += 1
      $finalResult.textContent = startValue
      if (startValue === med) {
        clearInterval(counter)
      }
    }, interval);
  })
}

logJSONData()