// Animations and hover effects
const navbarLinks = document.querySelectorAll('#navbar ul li a');
navbarLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = "scale(1.1)";
    });
    link.addEventListener('mouseleave', () => {
        link.style.transform = "scale(1)";
    });
});
