function changeTheme() {
	const theme = document.getElementById('HTML')
	const themeChanger = document.getElementById('themeChanger')

	if (theme.getAttribute('data-theme') === 'light') {
		theme.setAttribute('data-theme', 'dark')
		themeChanger.textContent = 'Light Mode'
	} else {
		theme.setAttribute('data-theme', 'light')
		themeChanger.textContent = 'Dark Mode'
	}
}
