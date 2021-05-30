var menubtn = document.querySelector('.menu-bar');

menubtn.addEventListener('click', () => {
  var menu = document.querySelector('.menu');
  console.log('click');
  menu.classList.toggle("show");
})