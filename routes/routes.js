const express = require('express');
const router = express.Router();

// Configuration
const WHATSAPP_NUMBERS = {
    'insulfilm': '5511947413471',
    'others': '5511947870409'
};

// Home route
router.get('/', (req, res) => {
    res.render('index');
});

// API route for WhatsApp numbers
router.get('/api/whatsapp-numbers', (req, res) => {
    res.json(WHATSAPP_NUMBERS);
});

// API route for features
router.get('/api/features', (req, res) => {
    const features = [
        {
            'icon': 'fa-shield',
            'title': 'Garantia Total',
            'description': 'Oferecemos garantia em todos os nossos serviços para sua tranquilidade.'
        },
        {
            'icon': 'fa-trophy',
            'title': 'Qualidade Premium',
            'description': 'Utilizamos apenas materiais de primeira linha e as melhores marcas do mercado.'
        },
        {
            'icon': 'fa-clock',
            'title': 'Agilidade',
            'description': 'Serviço rápido e eficiente, respeitando seu tempo.'
        },
        {
            'icon': 'fa-tools',
            'title': 'Profissionais Especializados',
            'description': 'Equipe altamente treinada e experiente.'
        }
    ];
    res.json(features);
});

// API route for testimonials
router.get('/api/testimonials', (req, res) => {
    const testimonials = [
        {
            'name': 'João Silva',
            'comment': 'Excelente serviço! Muito profissional e acabamento perfeito.'
        },
        {
            'name': 'Maria Santos',
            'comment': 'Adorei o resultado final. Recomendo a todos!'
        },
        {
            'name': 'Pedro Costa',
            'comment': 'Atendimento nota 10 e preço justo.'
        }
    ];
    res.json(testimonials);
});

module.exports = router;