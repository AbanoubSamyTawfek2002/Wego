const darkModeButton = document.querySelector('.dark-mode-btn');


darkModeButton.addEventListener('click', () => {
  
  document.body.classList.toggle('dark-mode');
});