document.addEventListener('DOMContentLoaded', () => {
    const menuButton = document.querySelector('.menu');
    const navMenu = document.querySelector('.site-nav');

    if (!menuButton || !navMenu) {
        return;
    }

    const setMenuState = (isOpen) => {
        menuButton.setAttribute('aria-expanded', String(isOpen));
        navMenu.classList.toggle('show', isOpen);
    };

    menuButton.addEventListener('click', () => {
        const isExpanded = menuButton.getAttribute('aria-expanded') === 'true';
        setMenuState(!isExpanded);
    });

    navMenu.querySelectorAll('a').forEach((link) => {
        link.addEventListener('click', () => setMenuState(false));
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 760) {
            setMenuState(false);
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            setMenuState(false);
        }
    });
});
