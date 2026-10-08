const menuToggle = document.querySelector('.legal-menu-toggle')
const navigation = document.querySelector('#legal-navigation')
const currentYear = document.querySelector('#current-year')

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear())
}

if (menuToggle && navigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen))
    menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation menu' : 'Open navigation menu')
    navigation.classList.toggle('is-open', isOpen)
  }

  menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true')
  })

  navigation.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setMenuOpen(false)
    }
  })

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false)
      menuToggle.focus()
    }
  })

  document.addEventListener('click', (event) => {
    if (!navigation.contains(event.target) && !menuToggle.contains(event.target)) {
      setMenuOpen(false)
    }
  })
}
