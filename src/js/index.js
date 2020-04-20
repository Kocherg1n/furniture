// hamburger menu

const hamburgerOpenBtn = document.querySelector('.hamburger');
const mainNav = document.querySelector('.nav');
const overlay = document.querySelector('.overlay');

hamburgerOpenBtn.addEventListener('click', () => {
  overlay.style.display = 'block';
  mainNav.style.display = 'block';
});

overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    mainNav.style.display = 'none';
  }
});


// personal-area tabs

const tab = function () {
  const tabNav = document.querySelectorAll('.personal-area-nav__button');
  const tabContent = document.querySelectorAll('.personal-area__tabs');
  let tabName;

  tabNav.forEach(item => {
    item.addEventListener('click', selectTabNav)
  });

  function selectTabNav() {
    tabNav.forEach(item => {
      item.classList.remove('personal-area-nav__button--active');
      this.classList.add('personal-area-nav__button--active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    })
  }

  function selectTabContent(tabName) {
    tabContent.forEach(item => {
      item.classList.contains(tabName) ? item.classList.add('personal-area__tabs--active') : item.classList.remove('personal-area__tabs--active');
    })
  }
};

tab();

// change lang button

const langButton = document.querySelector('.header__button-lang');
const langButtonList = document.querySelector('.header__buttons-lang-check-list');

langButton.addEventListener('click', (e) => {
  langButtonList.classList.toggle('header__buttons-lang-check-list--active');
});

