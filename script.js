// Dados do site em diferentes idiomas
const content = {
    'pt-BR': {
        nav: {
            contact: 'Contato'
        },
        hero: {
            title: 'Transforme seus Processos com Automação Inteligente',
            subtitle: 'Você sabia que até 90% do tempo e 45% dos custos em tarefas repetitivas podem ser automatizados?',
            description: 'Reduza retrabalho, economize tempo e aumente a eficiência operacional',
            cta: 'Receba sua Proposta Personalizada'
        },
        caseStudies: {
            title: 'Casos Reais de Automação',
            cases: [
                {
                    icon: 'package',
                    title: 'Processamento de Pedidos',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '4 horas/dia',
                            '30 minutos por pedido',
                            '20% de retrabalho',
                            'Produtividade: 20%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            '45 segundos por pedido',
                            'Integração entre sistemas',
                            '0% de retrabalho',
                            'Produtividade: 90% (+350%)'
                        ]
                    }
                },
                {
                    icon: 'message-circle',
                    title: 'Atendimento ao Cliente',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '1h+ para resposta',
                            'Horário comercial limitado',
                            'Eficiência: 20%'
                        ]
                    },
                    automated: {
                        title: 'Automatizado',
                        metrics: [
                            'Respostas instantâneas',
                            '24/7 sem custo adicional',
                            'Eficiência: 95% (+375%)'
                        ]
                    }
                },
                {
                    icon: 'file-text',
                    title: 'Relatórios Gerenciais',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '4 horas/semana',
                            'Dados desatualizados',
                            'Precisão: 70%'
                        ]
                    },
                    automated: {
                        title: 'Automatizado',
                        metrics: [
                            'Atualização contínua',
                            'Dados em tempo real',
                            'Precisão: 99% (+41%)'
                        ]
                    }
                },
                {
                    icon: 'warehouse',
                    title: 'Gestão de Estoque',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '2 dias para atualização',
                            '10% de discrepância',
                            'Pedidos desatualizados',
                            'Precisão: 75%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            'Atualização em tempo real',
                            '0% de discrepância',
                            'Reposição automática',
                            'Precisão: 99% (+32%)'
                        ]
                    }
                },
                {
                    icon: 'receipt',
                    title: 'Faturamento',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '3 horas/semana',
                            '5% de erros',
                            'Atrasos no envio',
                            'Eficiência: 40%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            '1 minuto/semana',
                            '0% de erros',
                            'Envio automático',
                            'Eficiência: 98% (+150%)'
                        ]
                    }
                }
            ]
        },
        benefits: {
            title: 'Benefícios Tangíveis da Automação',
            subtitle: 'Transforme sua operação com benefícios reais e mensuráveis',
            items: [
                {
                    icon: 'check-circle',
                    title: 'Elimine Erros',
                    description: 'Integração automática entre sistemas'
                },
                {
                    icon: 'timer',
                    title: 'Economize Tempo',
                    description: 'Economize tempo e reduza custos operacionais com processos automatizados'
                },
                {
                    icon: 'eye',
                    title: 'Visibilidade Total',
                    description: 'Obtenha visibilidade total dos processos em tempo real com dashboards personalizados'
                },
                {
                    icon: 'rocket',
                    title: 'Decisões Ágeis',
                    description: 'Garanta decisões ágeis com dashboards interativos e alertas automáticos'
                }
            ]
        },
        implementation: {
            title: 'Cronograma de Implantação',
            subtitle: 'Um processo estruturado para garantir o sucesso da sua automação',
            steps: [
                {
                    title: 'Mapeamento e Mineração',
                    description: 'Mapeamento completo dos processos atuais (AS-IS) e identificação de oportunidades de melhoria'
                },
                {
                    title: 'Definição do TO-BE',
                    description: 'Entrega do TO-BE com a definição de todas as integrações técnicas (APIs, CRM, ERP, IoT, workflow triggers)'
                },
                {
                    title: 'Construção e Implementação',
                    description: 'Desenvolvimento das interfaces (dashboard Kanban, formulários e widgets) e instalação da solução'
                },
                {
                    title: 'Manutenção e Refinamento',
                    description: 'Acompanhamento contínuo, suporte técnico e atualizações para garantir o desempenho ideal da solução'
                }
            ]
        },
        testimonials: {
            title: 'O Que Dizem Sobre As Automações',
            subtitle: 'Histórias de transformação com automação inteligente',
            items: [
                {
                    quote: 'Reduzimos o tempo de processamento de pedidos em 73% e praticamente eliminamos os erros de entrada de dados. O ROI foi alcançado em menos de 3 meses.',
                    author: 'Carlos Mendes',
                    role: 'Diretor de Operações'
                },
                {
                    quote: 'Nossa equipe de suporte agora resolve 40% mais tickets por dia, e nossos clientes estão mais satisfeitos com o tempo de resposta. A automação transformou nossa operação.',
                    author: 'Ana Soares',
                    role: 'Gerente de Atendimento'
                },
                {
                    quote: 'Os dashboards em tempo real nos deram visibilidade que nunca tivemos antes. Agora tomamos decisões baseadas em dados atualizados, não em relatórios da semana passada.',
                    author: 'Marcelo Alves',
                    role: 'CEO'
                }
            ]
        },
        cta: {
            title: 'Pronto para Transformar sua Operação?',
            subtitle: 'Agende uma reunião para receber uma proposta personalizada de automação inteligente para seu negócio',
            button: 'Agendar Consultoria Gratuita'
        },
        form: {
            title: 'Comece Agora',
            features: {
                title: 'Por que automatizar com tecnologia exclusiva?',
                items: [
                    'Integração com mais de 200 aplicativos e serviços',
                    'Fluxos de trabalho personalizados para seu negócio',
                    'Automação de tarefas repetitivas e processos complexos',
                    'Dashboards e relatórios em tempo real',
                    'Suporte técnico especializado e contínuo'
                ]
            },
            name: 'Nome',
            email: 'Email',
            phone: 'Telefone',
            company: 'Empresa',
            submit: 'Receber Proposta Personalizada',
            privacy: 'Seus dados estão seguros conosco. Não compartilhamos suas informações.'
        },
        footer: {
            rights: '© 2024 AutomatizaPro. Todos os direitos reservados.',
            disclaimer: 'As soluções podem variar de acordo com cada negócio.'
        }
    },
    'pt-PT': {
        nav: {
            contact: 'Contacto'
        },
        hero: {
            title: 'Transforme os seus Processos com Automação Inteligente',
            subtitle: 'Sabia que até 90% do tempo e 45% dos custos em tarefas repetitivas podem ser automatizados?',
            description: 'Reduza retrabalho, poupe tempo e aumente a eficiência operacional',
            cta: 'Receba a sua Proposta Personalizada'
        },
        caseStudies: {
            title: 'Casos Reais de Automação',
            cases: [
                {
                    icon: 'package',
                    title: 'Processamento de Pedidos',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '4 horas/dia',
                            '30 minutos por pedido',
                            '20% de retrabalho',
                            'Produtividade: 20%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            '45 segundos por pedido',
                            'Integração entre sistemas',
                            '0% de retrabalho',
                            'Produtividade: 90% (+350%)'
                        ]
                    }
                },
                {
                    icon: 'message-circle',
                    title: 'Atendimento ao Cliente',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '1h+ para resposta',
                            'Horário comercial limitado',
                            'Eficiência: 20%'
                        ]
                    },
                    automated: {
                        title: 'Automatizado',
                        metrics: [
                            'Respostas instantâneas',
                            '24/7 sem custo adicional',
                            'Eficiência: 95% (+375%)'
                        ]
                    }
                },
                {
                    icon: 'file-text',
                    title: 'Relatórios Gerenciais',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '4 horas/semana',
                            'Dados desatualizados',
                            'Precisão: 70%'
                        ]
                    },
                    automated: {
                        title: 'Automatizado',
                        metrics: [
                            'Atualização contínua',
                            'Dados em tempo real',
                            'Precisão: 99% (+41%)'
                        ]
                    }
                },
                {
                    icon: 'warehouse',
                    title: 'Gestão de Estoque',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '2 dias para atualização',
                            '10% de discrepância',
                            'Pedidos desatualizados',
                            'Precisão: 75%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            'Atualização em tempo real',
                            '0% de discrepância',
                            'Reposição automática',
                            'Precisão: 99% (+32%)'
                        ]
                    }
                },
                {
                    icon: 'receipt',
                    title: 'Faturamento',
                    manual: {
                        title: 'Processo Manual',
                        metrics: [
                            '3 horas/semana',
                            '5% de erros',
                            'Atrasos no envio',
                            'Eficiência: 40%'
                        ]
                    },
                    automated: {
                        title: 'Processo Automatizado',
                        metrics: [
                            '1 minuto/semana',
                            '0% de erros',
                            'Envio automático',
                            'Eficiência: 98% (+150%)'
                        ]
                    }
                }
            ]
        },
        benefits: {
            title: 'Benefícios Tangíveis da Automação',
            subtitle: 'Transforme a sua operação com benefícios reais e mensuráveis',
            items: [
                {
                    icon: 'check-circle',
                    title: 'Elimine Erros',
                    description: 'Integração automática entre sistemas'
                },
                {
                    icon: 'timer',
                    title: 'Poupe Tempo',
                    description: 'Poupe tempo e reduza custos operacionais com processos automatizados'
                },
                {
                    icon: 'eye',
                    title: 'Visibilidade Total',
                    description: 'Obtenha visibilidade total dos processos em tempo real com dashboards personalizados'
                },
                {
                    icon: 'rocket',
                    title: 'Decisões Ágeis',
                    description: 'Garanta decisões ágeis com dashboards interativos e alertas automáticos'
                }
            ]
        },
        implementation: {
            title: 'Cronograma de Implementação',
            subtitle: 'Um processo estruturado para garantir o sucesso da sua automação',
            steps: [
                {
                    title: 'Mapeamento e Mineração',
                    description: 'Mapeamento completo dos processos atuais (AS-IS) e identificação de oportunidades de melhoria'
                },
                {
                    title: 'Definição do TO-BE',
                    description: 'Entrega do TO-BE com a definição de todas as integrações técnicas (APIs, CRM, ERP, IoT, workflow triggers)'
                },
                {
                    title: 'Construção e Implementação',
                    description: 'Desenvolvimento das interfaces (dashboard Kanban, formulários e widgets) e instalação da solução'
                },
                {
                    title: 'Manutenção e Refinamento',
                    description: 'Acompanhamento contínuo, suporte técnico e atualizações para garantir o desempenho ideal da solução'
                }
            ]
        },
        testimonials: {
            title: 'O Que Dizem Sobre As Automações',
            subtitle: 'Histórias de transformação com automação inteligente',
            items: [
                {
                    quote: 'Reduzimos o tempo de processamento de pedidos em 73% e praticamente eliminamos os erros de entrada de dados. O ROI foi alcançado em menos de 3 meses.',
                    author: 'Carlos Mendes',
                    role: 'Diretor de Operações'
                },
                {
                    quote: 'A nossa equipe de suporte agora resolve 40% mais tickets por dia, e os nossos clientes estão mais satisfeitos com o tempo de resposta. A automação transformou a nossa operação.',
                    author: 'Ana Soares',
                    role: 'Gerente de Atendimento'
                },
                {
                    quote: 'Os dashboards em tempo real deram-nos visibilidade que nunca tivemos antes. Agora tomamos decisões baseadas em dados atualizados, não em relatórios da semana passada.',
                    author: 'Marcelo Alves',
                    role: 'CEO'
                }
            ]
        },
        cta: {
            title: 'Pronto para Transformar a sua Operação?',
            subtitle: 'Agende uma reunião para receber uma proposta personalizada de automação inteligente para o seu negócio',
            button: 'Agendar Consultoria Gratuita'
        },
        form: {
            title: 'Comece Agora',
            features: {
                title: 'Por que automatizar com tecnologia exclusiva?',
                items: [
                    'Integração com mais de 200 aplicativos e serviços',
                    'Fluxos de trabalho personalizados para o seu negócio',
                    'Automação de tarefas repetitivas e processos complexos',
                    'Dashboards e relatórios em tempo real',
                    'Suporte técnico especializado e contínuo'
                ]
            },
            name: 'Nome',
            email: 'Email',
            phone: 'Telefone',
            company: 'Empresa',
            submit: 'Receber Proposta Personalizada',
            privacy: 'Os seus dados estão seguros connosco. Não partilhamos as suas informações.'
        },
        footer: {
            rights: '© 2024 AutomatizaPro. Todos os direitos reservados.',
            disclaimer: 'As soluções podem variar de acordo com cada negócio.'
        }
    },
    'en': {
        nav: {
            contact: 'Contact'
        },
        hero: {
            title: 'Transform Your Processes with Intelligent Automation',
            subtitle: 'Did you know that up to 90% of time and 45% of costs in repetitive tasks can be automated?',
            description: 'Reduce rework, save time and increase operational efficiency',
            cta: 'Get Your Personalized Proposal'
        },
        caseStudies: {
            title: 'Real Automation Cases',
            cases: [
                {
                    icon: 'package',
                    title: 'Order Processing',
                    manual: {
                        title: 'Manual Process',
                        metrics: [
                            '4 hours/day',
                            '30 minutes per order',
                            '20% rework',
                            'Productivity: 20%'
                        ]
                    },
                    automated: {
                        title: 'Automated Process',
                        metrics: [
                            '45 seconds per order',
                            'Integration between systems',
                            '0% rework',
                            'Productivity: 90% (+350%)'
                        ]
                    }
                },
                {
                    icon: 'message-circle',
                    title: 'Customer Service',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '1h+ for response',
                            'Limited business hours',
                            'Efficiency: 20%'
                        ]
                    },
                    automated: {
                        title: 'Automated',
                        metrics: [
                            'Instant responses',
                            '24/7 at no additional cost',
                            'Efficiency: 95% (+375%)'
                        ]
                    }
                },
                {
                    icon: 'file-text',
                    title: 'Management Reports',
                    manual: {
                        title: 'Manual',
                        metrics: [
                            '4 hours/week',
                            'Outdated data',
                            'Accuracy: 70%'
                        ]
                    },
                    automated: {
                        title: 'Automated',
                        metrics: [
                            'Continuous updates',
                            'Real-time data',
                            'Accuracy: 99% (+41%)'
                        ]
                    }
                },
                {
                    icon: 'warehouse',
                    title: 'Inventory Management',
                    manual: {
                        title: 'Manual Process',
                        metrics: [
                            '2 days for update',
                            '10% discrepancy',
                            'Outdated orders',
                            'Accuracy: 75%'
                        ]
                    },
                    automated: {
                        title: 'Automated Process',
                        metrics: [
                            'Real-time updates',
                            '0% discrepancy',
                            'Automatic replenishment',
                            'Accuracy: 99% (+32%)'
                        ]
                    }
                },
                {
                    icon: 'receipt',
                    title: 'Billing',
                    manual: {
                        title: 'Manual Process',
                        metrics: [
                            '3 hours/week',
                            '5% errors',
                            'Delays in sending',
                            'Efficiency: 40%'
                        ]
                    },
                    automated: {
                        title: 'Automated Process',
                        metrics: [
                            '1 minute/week',
                            '0% errors',
                            'Automatic sending',
                            'Efficiency: 98% (+150%)'
                        ]
                    }
                }
            ]
        },
        benefits: {
            title: 'Tangible Benefits of Automation',
            subtitle: 'Transform your operation with real and measurable benefits',
            items: [
                {
                    icon: 'check-circle',
                    title: 'Eliminate Errors',
                    description: 'Automatic integration between systems'
                },
                {
                    icon: 'timer',
                    title: 'Save Time',
                    description: 'Save time and reduce operational costs with automated processes'
                },
                {
                    icon: 'eye',
                    title: 'Total Visibility',
                    description: 'Get total visibility of processes in real-time with customized dashboards'
                },
                {
                    icon: 'rocket',
                    title: 'Agile Decisions',
                    description: 'Ensure agile decisions with interactive dashboards and automatic alerts'
                }
            ]
        },
        implementation: {
            title: 'Implementation Schedule',
            subtitle: 'A structured process to ensure the success of your automation',
            steps: [
                {
                    title: 'Mapping and Mining',
                    description: 'Complete mapping of current processes (AS-IS) and identification of improvement opportunities'
                },
                {
                    title: 'TO-BE Definition',
                    description: 'TO-BE delivery with the definition of all technical integrations (APIs, CRM, ERP, IoT, workflow triggers)'
                },
                {
                    title: 'Construction and Implementation',
                    description: 'Development of interfaces (Kanban dashboard, forms and widgets) and solution installation'
                },
                {
                    title: 'Maintenance and Refinement',
                    description: 'Continuous monitoring, technical support and updates to ensure optimal solution performance'
                }
            ]
        },
        testimonials: {
            title: 'What They Say About Automations',
            subtitle: 'Stories of transformation with intelligent automation',
            items: [
                {
                    quote: 'We reduced order processing time by 73% and practically eliminated data entry errors. ROI was achieved in less than 3 months.',
                    author: 'Carlos Mendes',
                    role: 'Operations Director'
                },
                {
                    quote: 'Our support team now resolves 40% more tickets per day, and our customers are more satisfied with response time. Automation transformed our operation.',
                    author: 'Ana Soares',
                    role: 'Support Manager'
                },
                {
                    quote: 'Real-time dashboards gave us visibility we never had before. Now we make decisions based on updated data, not last week\'s reports.',
                    author: 'Marcelo Alves',
                    role: 'CEO'
                }
            ]
        },
        cta: {
            title: 'Ready to Transform Your Operation?',
            subtitle: 'Schedule a meeting to receive a personalized proposal for intelligent automation for your business',
            button: 'Schedule Free Consultation'
        },
        form: {
            title: 'Start Now',
            features: {
                title: 'Why automate with exclusive technology?',
                items: [
                    'Integration with more than 200 applications and services',
                    'Workflows customized for your business',
                    'Automation of repetitive tasks and complex processes',
                    'Real-time dashboards and reports',
                    'Specialized and continuous technical support'
                ]
            },
            name: 'Name',
            email: 'Email',
            phone: 'Phone',
            company: 'Company',
            submit: 'Get Personalized Proposal',
            privacy: 'Your data is safe with us. We do not share your information.'
        },
        footer: {
            rights: '© 2024 AutomatizaPro. All rights reserved.',
            disclaimer: 'Solutions may vary according to each business.'
        }
    }
};

// Estado atual do site
let currentLang = 'pt-BR';
let currentSlide = 0;

// Cache de elementos DOM frequentemente usados
const domCache = {
    container: null,
    dotsContainer: null,
    prevBtn: null,
    nextBtn: null,
    form: null
};

// Cache de elementos traduzidos
let translatedElements = null;

// Otimização da função createIcon
const createIcon = (name, className = '') => {
    const icon = document.createElement('i');
    icon.dataset.lucide = name;
    if (className) icon.className = className;
    return icon;
};

// Otimização do renderCaseStudies com DocumentFragment
function renderCaseStudies() {
    if (!domCache.container) {
        domCache.container = document.querySelector('.case-studies-container');
        domCache.dotsContainer = document.querySelector('.slider-dots');
    }
    
    const fragment = document.createDocumentFragment();
    const cases = content[currentLang].caseStudies.cases;
    
    cases.forEach(caseStudy => {
        const card = document.createElement('div');
        card.className = 'case-card';
        
        card.innerHTML = `
            <h3>${caseStudy.title}<i data-lucide="${caseStudy.icon}" class="w-8 h-8"></i></h3>
            <div class="manual-metrics">
                <h4>${caseStudy.manual.title}</h4>
                ${caseStudy.manual.metrics.map(metric => `<p>${metric}</p>`).join('')}
            </div>
            <div class="automated-metrics">
                <h4>${caseStudy.automated.title}</h4>
                ${caseStudy.automated.metrics.map(metric => `<p>${metric}</p>`).join('')}
            </div>
        `;
        
        fragment.appendChild(card);
    });
    
    domCache.container.innerHTML = '';
    domCache.container.appendChild(fragment);
    
    // Otimização dos pontos do slider
    const totalSlides = cases.length;
    const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const maxSlide = Math.ceil(totalSlides - cardsPerView);
    
    const dotsFragment = document.createDocumentFragment();
    for (let i = 0; i <= maxSlide; i++) {
        const dot = document.createElement('div');
        dot.className = `dot ${i === currentSlide ? 'active' : ''}`;
        dot.dataset.index = i;
        dot.addEventListener('click', () => goToSlide(i));
        dotsFragment.appendChild(dot);
    }
    
    domCache.dotsContainer.innerHTML = '';
    domCache.dotsContainer.appendChild(dotsFragment);
    
    goToSlide(0);
    initLucide();
}

// Otimização do renderBenefits com DocumentFragment
function renderBenefits() {
    const container = document.querySelector('.benefits-grid');
    const fragment = document.createDocumentFragment();
    
    content[currentLang].benefits.items.forEach(benefit => {
        const card = document.createElement('div');
        card.className = 'benefit-card';
        card.innerHTML = `
            <i data-lucide="${benefit.icon}" class="w-12 h-12"></i>
            <h3>${benefit.title}</h3>
            <p>${benefit.description}</p>
        `;
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
    initLucide();
}

// Otimização do renderImplementation com DocumentFragment
function renderImplementation() {
    const container = document.querySelector('.implementation-steps');
    const fragment = document.createDocumentFragment();
    
    content[currentLang].implementation.steps.forEach(step => {
        const card = document.createElement('div');
        card.className = 'step-card';
        card.innerHTML = `
            <h3>${step.title}</h3>
            <p>${step.description}</p>
        `;
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

// Otimização do renderTestimonials com DocumentFragment
function renderTestimonials() {
    const container = document.querySelector('.testimonials-container');
    const fragment = document.createDocumentFragment();
    
    content[currentLang].testimonials.items.forEach(testimonial => {
        const card = document.createElement('div');
        card.className = 'testimonial-card';
        card.innerHTML = `
            <blockquote>${testimonial.quote}</blockquote>
            <p class="author">${testimonial.author}</p>
            <p class="role">${testimonial.role}</p>
        `;
        fragment.appendChild(card);
    });
    
    container.innerHTML = '';
    container.appendChild(fragment);
}

// Otimização do renderForm
function renderForm() {
    if (!domCache.form) {
        domCache.form = document.getElementById('contact-form');
    }
    
    const formContent = content[currentLang].form;
    const inputs = domCache.form.querySelectorAll('input');
    
    inputs[0].placeholder = formContent.name;
    inputs[1].placeholder = formContent.email;
    inputs[2].placeholder = formContent.phone;
    inputs[3].placeholder = formContent.company;
    
    domCache.form.querySelector('button').textContent = formContent.submit;
    domCache.form.querySelector('.privacy').textContent = formContent.privacy;
    
    const featuresContainer = document.querySelector('.form-features');
    featuresContainer.querySelector('h3').textContent = formContent.features.title;
    
    const featuresList = featuresContainer.querySelector('ul');
    featuresList.innerHTML = formContent.features.items
        .map(item => `<li><i data-lucide="check-circle"></i> ${item}</li>`)
        .join('');
    
    initLucide();
}

// Otimização do updateContent com cache de elementos
function updateContent() {
    if (!translatedElements) {
        translatedElements = {
            hero: {
                title: document.querySelector('.hero h1'),
                subtitle: document.querySelector('.hero .subtitle'),
                description: document.querySelector('.hero .description'),
                cta: document.querySelector('.hero .cta-button')
            },
            sections: {
                caseStudies: document.querySelector('.case-studies h2'),
                benefits: {
                    title: document.querySelector('.benefits h2'),
                    subtitle: document.querySelector('.benefits .subtitle')
                },
                implementation: {
                    title: document.querySelector('.implementation h2'),
                    subtitle: document.querySelector('.implementation .subtitle')
                },
                testimonials: {
                    title: document.querySelector('.testimonials h2'),
                    subtitle: document.querySelector('.testimonials .subtitle')
                },
                cta: {
                    title: document.querySelector('.cta h2'),
                    subtitle: document.querySelector('.cta .subtitle'),
                    button: document.querySelector('.cta .cta-button')
                },
                form: document.querySelector('.form h2'),
                contact: document.querySelector('.contact-btn')
            }
        };
    }
    
    const currentContent = content[currentLang];
    
    // Atualizar textos com elementos em cache
    translatedElements.hero.title.textContent = currentContent.hero.title;
    translatedElements.hero.subtitle.textContent = currentContent.hero.subtitle;
    translatedElements.hero.description.textContent = currentContent.hero.description;
    translatedElements.hero.cta.textContent = currentContent.hero.cta;
    
    translatedElements.sections.caseStudies.textContent = currentContent.caseStudies.title;
    translatedElements.sections.benefits.title.textContent = currentContent.benefits.title;
    translatedElements.sections.benefits.subtitle.textContent = currentContent.benefits.subtitle;
    translatedElements.sections.implementation.title.textContent = currentContent.implementation.title;
    translatedElements.sections.implementation.subtitle.textContent = currentContent.implementation.subtitle;
    translatedElements.sections.testimonials.title.textContent = currentContent.testimonials.title;
    translatedElements.sections.testimonials.subtitle.textContent = currentContent.testimonials.subtitle;
    translatedElements.sections.cta.title.textContent = currentContent.cta.title;
    translatedElements.sections.cta.subtitle.textContent = currentContent.cta.subtitle;
    translatedElements.sections.cta.button.textContent = currentContent.cta.button;
    translatedElements.sections.form.textContent = currentContent.form.title;
    translatedElements.sections.contact.textContent = currentContent.nav.contact;
    
    // Renderizar seções com conteúdo dinâmico
    requestAnimationFrame(() => {
        renderCaseStudies();
        renderBenefits();
        renderImplementation();
        renderTestimonials();
        renderForm();
        renderFooter();
        updateSlider();
    });
}

// Otimização das funções do slider
const goToSlide = (() => {
    let lastWidth = window.innerWidth;
    
    return (index) => {
        if (!domCache.container) {
            domCache.container = document.querySelector('.case-studies-container');
        }
        
        const totalSlides = content[currentLang].caseStudies.cases.length;
        const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        const maxSlide = Math.ceil(totalSlides - cardsPerView);
        
        currentSlide = Math.max(0, Math.min(index, maxSlide));
        
        const slideWidth = 100 / cardsPerView;
        const offset = currentSlide * slideWidth;
        
        requestAnimationFrame(() => {
            domCache.container.style.transform = `translateX(-${offset}%)`;
            
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === currentSlide);
            });
            
            if (!domCache.prevBtn) {
                domCache.prevBtn = document.querySelector('.prev-btn');
                domCache.nextBtn = document.querySelector('.next-btn');
            }
            
            domCache.prevBtn.style.opacity = currentSlide === 0 ? '0.5' : '1';
            domCache.nextBtn.style.opacity = currentSlide === maxSlide ? '0.5' : '1';
        });
        
        lastWidth = window.innerWidth;
    };
})();

function nextSlide() {
    const totalSlides = content[currentLang].caseStudies.cases.length;
    const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
    const maxSlide = Math.ceil(totalSlides - cardsPerView);
    
    if (currentSlide < maxSlide) {
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function updateSlider() {
    const container = document.querySelector('.case-studies-container');
    container.style.transform = `translateX(-${currentSlide * 100}%)`;
    
    // Atualizar os pontos do slider
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentSlide);
    });
}

// Função para inicializar o Lucide
function initLucide() {
    lucide.createIcons();
}

// Função para renderizar o footer
function renderFooter() {
    const footer = document.querySelector('footer');
    const paragraphs = footer.querySelectorAll('p');
    
    paragraphs[0].textContent = content[currentLang].footer.rights;
    paragraphs[1].textContent = content[currentLang].footer.disclaimer;
}

// Função para trocar o idioma
function changeLanguage(lang) {
    currentLang = lang;
    
    // Atualizar botões de idioma
    const langButtons = document.querySelectorAll('.lang-btn');
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
    
    // Atualizar o conteúdo
    updateContent();
}

// Event Listeners otimizados
document.addEventListener('DOMContentLoaded', () => {
    // Inicialização com cache de elementos
    domCache.container = document.querySelector('.case-studies-container');
    domCache.dotsContainer = document.querySelector('.slider-dots');
    domCache.prevBtn = document.querySelector('.prev-btn');
    domCache.nextBtn = document.querySelector('.next-btn');
    domCache.form = document.getElementById('contact-form');
    
    // Renderização inicial
    updateContent();
    
    // Event listeners otimizados
    const debounce = (fn, delay) => {
        let timeoutId;
        return (...args) => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => fn.apply(null, args), delay);
        };
    };
    
    // Slider controls
    domCache.prevBtn.addEventListener('click', () => currentSlide > 0 && goToSlide(currentSlide - 1));
    domCache.nextBtn.addEventListener('click', () => {
        const totalSlides = content[currentLang].caseStudies.cases.length;
        const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        const maxSlide = Math.ceil(totalSlides - cardsPerView);
        currentSlide < maxSlide && goToSlide(currentSlide + 1);
    });
    
    // Language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            currentLang = btn.dataset.lang;
            document.querySelectorAll('.lang-btn').forEach(b => 
                b.classList.toggle('active', b === btn)
            );
            updateContent();
        });
    });
    
    // Form submission
    domCache.form.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        console.log('Form data:', Object.fromEntries(formData));
        alert('Obrigado! Entraremos em contato em breve.');
        e.target.reset();
    });
    
    // Scroll to form
    document.querySelectorAll('a[href="#form"], .contact-btn, .cta-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector('.form').scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
    
    // Slider autoplay
    let autoplayInterval = setInterval(() => {
        const totalSlides = content[currentLang].caseStudies.cases.length;
        const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
        const maxSlide = Math.ceil(totalSlides - cardsPerView);
        currentSlide < maxSlide && goToSlide(currentSlide + 1);
    }, 8000);
    
    // Touch events for slider
    const caseStudiesSection = document.querySelector('.case-studies');
    let touchStartX = 0;
    
    caseStudiesSection.addEventListener('mouseenter', () => clearInterval(autoplayInterval));
    caseStudiesSection.addEventListener('mouseleave', () => {
        autoplayInterval = setInterval(() => {
            const totalSlides = content[currentLang].caseStudies.cases.length;
            const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
            const maxSlide = Math.ceil(totalSlides - cardsPerView);
            currentSlide < maxSlide && goToSlide(currentSlide + 1);
        }, 8000);
    });
    
    caseStudiesSection.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        clearInterval(autoplayInterval);
    }, { passive: true });
    
    caseStudiesSection.addEventListener('touchend', e => {
        const touchEndX = e.changedTouches[0].clientX;
        const swipeDistance = touchEndX - touchStartX;
        
        if (Math.abs(swipeDistance) > 50) {
            swipeDistance > 0 ? prevSlide() : nextSlide();
        }
        
        autoplayInterval = setInterval(() => {
            const totalSlides = content[currentLang].caseStudies.cases.length;
            const cardsPerView = window.innerWidth > 1024 ? 3 : window.innerWidth > 768 ? 2 : 1;
            const maxSlide = Math.ceil(totalSlides - cardsPerView);
            currentSlide < maxSlide && goToSlide(currentSlide + 1);
        }, 8000);
    }, { passive: true });
    
    // Window resize
    window.addEventListener('resize', debounce(() => {
        renderCaseStudies();
        goToSlide(currentSlide);
    }, 250));
}); 