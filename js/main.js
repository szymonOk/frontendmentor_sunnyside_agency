document.addEventListener('DOMContentLoaded', function () {
	const navbar = document.querySelector('.nav')

	function addNavShadow() {
		if (window.scrollY >= 100) {
			navbar.classList.add('nav-bg')
		} else {
			navbar.classList.remove('nav-bg')
		}
	}

	window.addEventListener('scroll', addNavShadow)
})

const btn = document.querySelector('.nav__btn')
const navList = document.querySelector('.nav__list-mobile')
const navItem = document.querySelectorAll('.nav__list-mobile-item')

const handleNav = () => {
	navList.classList.toggle('nav__list-mobile--active')

	navItem.forEach(item => {
		item.addEventListener('click', () => {
			navList.classList.remove('nav__list-mobile--active')
		})
	})
}

btn.addEventListener('click', handleNav)
