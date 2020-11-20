const hamburgerIcon = document.querySelector('#navigation-open');
const closeIcon = document.querySelector('#navigation-close');
const navList = document.querySelector('#navigation-small-list');

hamburgerIcon.addEventListener('click', () => {
	hamburgerIcon.classList.remove('active');
	closeIcon.classList.add('active');
	navList.classList.add('active');
});

closeIcon.addEventListener('click', () => {
	hamburgerIcon.classList.add('active');
	closeIcon.classList.remove('active');
	navList.classList.remove('active');
});
