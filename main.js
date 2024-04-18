// setTimeout(() => {
//   const myTag = document.createElement('div')
//   myTag.innerText = '반가워요'
//   const myClass = document.querySelector('.my-class')
//   myClass.appendChild(myTag)
// }, 1000)
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("./sw.js").then((registration) => {
      console.log("service worker: registered")
    }).catch((err) => {
      console.error(`(service worker register error) ${err}`)
    })
  })
}

const isConfirmed = window.confirm("안녕하세요~")
window.alert(isConfirmed ? "환영합니다~" : "꺼지세요~")
if (isConfirmed) {
  setTimeout(() => { const blueSpring0 = document.querySelector('#blue-spring-0'); blueSpring0.style.display = 'block'; }, 0 * 15000 + 500)
  setTimeout(() => { const blueSpring1 = document.querySelector('#blue-spring-1'); blueSpring1.style.display = 'block'; }, 0 * 15000 + 3000)
  setTimeout(() => { const blueSpring2 = document.querySelector('#blue-spring-2'); blueSpring2.style.display = 'block'; }, 1 * 15000 + 3000)
  setTimeout(() => { const blueSpring3 = document.querySelector('#blue-spring-3'); blueSpring3.style.display = 'block'; }, 2 * 15000 + 3000)
  setTimeout(() => { const blueSpring4 = document.querySelector('#blue-spring-4'); blueSpring4.style.display = 'block'; }, 3 * 15000 + 3000)
  setTimeout(() => { const blueSpring5 = document.querySelector('#blue-spring-5'); blueSpring5.style.display = 'block'; }, 4 * 15000 + 3000)
  setTimeout(() => { const blueSpring6 = document.querySelector('#blue-spring-6'); blueSpring6.style.display = 'block'; }, 5 * 15000 + 3000)
  setTimeout(() => { const blueSpring7 = document.querySelector('#blue-spring-7'); blueSpring7.style.display = 'block'; }, 6 * 15000 + 3000)
}