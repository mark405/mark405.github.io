window.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
	const menu = document.querySelector('.menu');
	const menuItem = document.querySelectorAll('.menu_item');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
	});
	
	menuItem.forEach(item => {
		item.addEventListener('click', () => {
			hamburger.classList.remove('hamburger_active');
			menu.classList.remove('menu_active');
		});
	});
});