document.addEventListener('DOMContentLoaded', (event) => {
    // Get all project cards
    const projectCards = document.querySelectorAll('.project-card');

    // Add click event listener to each project card
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            // Get the URL from the data attribute
            const url = card.getAttribute('data-url');
            // Open the new page
            window.location.href = url;
        });
    });
});

function toggleMenu() {
    const menu = document.querySelector('.nav-menu');
    console.log('Menu:', menu); // Check if the menu is correctly selected
    if (menu) {
        menu.classList.toggle('show');
        console.log('Class toggled:', menu.classList); // Check the class list after toggling
    } else {
        console.error('Menu element not found');
    }
}

