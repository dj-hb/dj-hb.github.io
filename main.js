setTimeout(() => {
  const myTag = document.createElement('div')
  myTag.innerText = '반가워요'
  const myClass = document.querySelector('.my-class')
  myClass.appendChild(myTag)
}, 1000)
