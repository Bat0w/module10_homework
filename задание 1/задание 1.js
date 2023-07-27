const btn = document.querySelector('.j-btn-test');
const iconFirst = document.querySelector('.checked');
const iconSecond = document.querySelector('.not-checked');

const showIcon = () => {
  iconFirst.classList.toggle('visible');
  iconSecond.classList.toggle('visible');
  if (!btn.checked) {
    btn.checked = true;
  } else {
    btn.checked = false;
  }

}

btn.addEventListener('click', showIcon);