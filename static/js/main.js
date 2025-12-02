// Configuration
const config = {
    whatsappNumbers: {
        insulfilm: '5511947413471',
        others: '5511947870409'
    },
    whatsappMessage: 'Olá! Gostaria de agendar um serviço.'
};

// Features data
const features = [
    {
        icon: 'fa-shield',
        title: 'Garantia Total',
        description: 'Garantia em todos os serviços realizados pela Ineditus.'
    },
    {
        icon: 'fa-trophy',
        title: 'Qualidade Premium',
        description: 'Produtos importados das melhores marcas do mercado.'
    },
    {
        icon: 'fa-clock',
        title: 'Agilidade',
        description: 'Serviço rápido e eficiente, respeitando seu tempo.'
    },
    {
        icon: 'fa-tools',
        title: 'Especialistas',
        description: 'Equipe Ineditus altamente treinada e certificada.'
    }
];

// Initialize page content
document.addEventListener('DOMContentLoaded', () => {
    initializeFeatures();
});

// Initialize features section
function initializeFeatures() {
    const featuresContainer = document.getElementById('features');
    featuresContainer.innerHTML = features.map(feature => `
        <div class="feature-card p-8 rounded-lg transform hover:scale-105 transition-all duration-300">
            <div class="w-16 h-16 bg-blue-900/50 rounded-full flex items-center justify-center mb-6">
                <i class="fas ${feature.icon} text-blue-400 text-2xl"></i>
            </div>
            <h3 class="text-xl font-semibold mb-4 text-blue-400">${feature.title}</h3>
            <p class="text-gray-400">${feature.description}</p>
        </div>
    `).join('');
}

// Modal functions
function openModal() {
    document.getElementById('serviceModal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('serviceModal').classList.add('hidden');
}

// Service selection handler
function selectService(service) {
    const number = config.whatsappNumbers[service];
    const message = encodeURIComponent(config.whatsappMessage);
    window.open(`https://wa.me/${number}?text=${message}`, '_blank');
    closeModal();
}

// Close modal when clicking outside
document.getElementById('serviceModal').addEventListener('click', (e) => {
    if (e.target === document.getElementById('serviceModal')) {
        closeModal();
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const heroSection = document.querySelector('section');
    const scrolled = window.pageYOffset;
    heroSection.style.backgroundPositionY = scrolled * 0.5 + 'px';
});