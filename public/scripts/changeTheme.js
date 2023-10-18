/**
 * Change the theme of the webpage.
 *
 * @param {undefined}
 * @return {undefined}
 */
function changeTheme() {
	// Get the HTML element
	const theme = document.getElementById('HTML')

	// Get the theme changer element
	const themeChanger = document.getElementById('themeChanger')

	// Check the current theme and update the data-theme attribute and text content accordingly
	if (theme.getAttribute('data-theme') === 'light') {
		theme.setAttribute('data-theme', 'dark')
		themeChanger.textContent = 'Light Mode'
	} else {
		theme.setAttribute('data-theme', 'light')
		themeChanger.textContent = 'Dark Mode'
	}
}
