function phonemenu() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'flex';
    } else {
        menu.style.display = 'none';
    }
}

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const menu = document.getElementById('mobileMenu');
    const menuButton = document.getElementById('phone3lines');
    if (
        menu.style.display === 'flex' &&
        !menu.contains(event.target) &&
        !menuButton.contains(event.target)
    ) {
        menu.style.display = 'none';
    }
});

// Close mobile menu when scrolling
window.addEventListener('scroll', function() {
    const menu = document.getElementById('mobileMenu');
    if (menu.style.display === 'flex') {
        menu.style.display = 'none';
    }
});