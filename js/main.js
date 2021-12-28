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
