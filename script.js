const button = document.getElementById('escapingButton');
const escapingButton = document.getElementById('escapingButton');
const showGifButton = document.getElementById('showGifButton');
const gifContainer = document.getElementById('gifContainer');

button.addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
});

escapingButton.addEventListener('mouseover', () => {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  
  escapingButton.style.left = `${x}px`;
  escapingButton.style.top = `${y}px`;
});

showGifButton.addEventListener('click', () => {
  const gif = document.createElement('img');
  gif.src = 'zdj/cat.gif'; 
  gifContainer.appendChild(gif);
  
  const header = document.querySelector('#gifContainer h1');
  header.style.display = 'block'; 
  
  const wszystkoDiv = document.querySelector('#wszystko');
  wszystkoDiv.style.display = 'none'; 
});
