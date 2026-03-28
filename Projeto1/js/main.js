// Função para alternar entre dark e light mode
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.getElementById('theme-toggle');

    // Verifica se está no modo claro
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        // Muda para dark mode
        body.classList.remove('light-mode');
        themeToggle.textContent = '🌙'; // Ícone da lua para dark mode
        localStorage.setItem('theme', 'dark');
    } else {
        // Muda para light mode
        body.classList.add('light-mode');
        themeToggle.textContent = '☀️'; // Ícone do sol para light mode
        localStorage.setItem('theme', 'light');
    }
}

// Função para carregar o tema salvo
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.getElementById('theme-toggle');

    if (savedTheme === 'light') {
        document.body.classList.add('light-mode');
        themeToggle.textContent = '☀️';
    } else {
        // Padrão é dark mode
        themeToggle.textContent = '🌙';
    }
}

// Função para selecionar perfil
function selectProfile(button) {
    const profileLi = button.closest('.profile');
    const img = profileLi.querySelector('img');
    const span = profileLi.querySelector('span');
    const name = span.textContent;
    const image = img.src;
    localStorage.setItem('perfilAtivoNome', name);
    localStorage.setItem('perfilAtivoImagem', image);
}

// Adiciona o event listener quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
    }
    loadTheme();
});