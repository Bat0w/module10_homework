const btn = document.querySelector('.j-btn-test');
const displayWidth = document.documentElement.clientWidth;
const displayHeight = document.documentElement.clientHeight;


const dispaySize = () => {
  
  alert ('ширина экрана: ' + displayWidth + '; ' + 'высота экрана: ' + displayHeight);

}

btn.addEventListener('click', dispaySize);