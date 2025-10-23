const menuButton = document.querySelector('.menu-button');
const navLinks = document.getElementById('nav-links');


if (menuButton && navLinks) {
	if (window.innerWidth < 700) {
		navLinks.classList.add('hide');
		menuButton.setAttribute('false');
	} else {
		navLinks.classList.remove('hide');
		menuButton.setAttribute('true');
	}

	menuButton.addEventListener('click', () => {
		const nowHidden = navLinks.classList.toggle('hide');
		menuButton.setAttribute(String(!nowHidden));
	});

	window.addEventListener('resize', () => {
		if (window.innerWidth >= 700) {
			navLinks.classList.remove('hide');
			menuButton.setAttribute('true');
		} else {
			navLinks.classList.add('hide');
			menuButton.setAttribute('false');
		}
	});
}
