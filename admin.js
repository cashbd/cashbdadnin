// ADMIN SHARED LOGIC

// Hardcoded cred check mechanism
function checkAuth() {
    const session = localStorage.getItem('adminUser');
    if (!session && !window.location.pathname.includes('login.html')) {
        window.location.href = 'login.html';
    }
}

checkAuth();

function adminLogout() {
    localStorage.removeItem('adminUser');
    window.location.href = 'login.html';
}

// Helper to show active nav
document.addEventListener('DOMContentLoaded', () => {
    const path = window.location.pathname;
    document.querySelectorAll('.nav-link').forEach(link => {
        if(path.includes(link.getAttribute('href'))) link.classList.add('active');
    });
});