window.onload = function () {
  const heading = document.createElement('h1')
  heading.textContent = 'Hello World!'

  const root = document.querySelector('#root')
  root.appendChild(heading)
}
