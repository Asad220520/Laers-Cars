const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach(function(el)  {
  el.addEventListener('click', open)
});

function open (evt) {
  const tabtarget = evt.currentTarget;
  const button = tabtarget.dataset.button;

  tabItem.forEach (function(item) {
    item.classList.remove('tabs__btn-item--active')
  });
  tabtarget.classList.add('tabs__btn-item--active');

  tabContent.forEach(function(item) {
    item.classList.remove('tabs__content-item--active');
  });

  document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}
