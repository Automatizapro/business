import React, { useState } from 'react';
import { 
  ArrowRight,
  BarChart3,
  Clock,
  DollarSign,
  FileCheck2,
  LineChart,
  Lock,
  RotateCw,
  Shield,
  Zap,
  CheckCircle2,
  XCircle,
  Package,
  MessageCircle,
  FileText,
  Warehouse,
  Receipt,
  Eye,
  Rocket,
  Timer,
  AlertCircle,
  ChevronLeft,
  ChevronRight,
  Quote
} from 'lucide-react';

// Language content
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
          icon: <Package className="w-8 h-8" />,
          title: 'Processamento de Pedidos',
          manual: {
            metrics: [
              '4 horas/dia',
              '30 minutos por pedido',
              '20% de retrabalho',
              'Produtividade: 20%'
            ]
          },
          automated: {
            metrics: [
              '45 segundos por pedido',
              'Integração entre sistemas',
              '0% de retrabalho',
              'Produtividade: 90% (+350%)'
            ]
          }
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: 'Atendimento ao Cliente',
          manual: {
            metrics: [
              '1h+ para resposta',
              'Horário comercial limitado',
              'Eficiência: 20%'
            ]
          },
          automated: {
            metrics: [
              'Respostas instantâneas',
              '24/7 sem custo adicional',
              'Eficiência: 95% (+375%)'
            ]
          }
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Relatórios Gerenciais',
          manual: {
            metrics: [
              '4 horas/semana',
              'Dados desatualizados',
              'Precisão: 70%'
            ]
          },
          automated: {
            metrics: [
              'Atualização contínua',
              'Dados em tempo real',
              'Precisão: 99% (+41%)'
            ]
          }
        },
        {
          icon: <Warehouse className="w-8 h-8" />,
          title: 'Gestão de Estoque',
          manual: {
            metrics: [
              '2 dias para atualização',
              '10% de discrepância',
              'Pedidos desatualizados',
              'Precisão: 75%'
            ]
          },
          automated: {
            metrics: [
              'Atualização em tempo real',
              '0% de discrepância',
              'Reposição automática',
              'Precisão: 99% (+32%)'
            ]
          }
        },
        {
          icon: <Receipt className="w-8 h-8" />,
          title: 'Faturamento',
          manual: {
            metrics: [
              '/semana',
              '5% de erros',
              'Atrasos no envio',
              'Eficiência: 40%'
            ]
          },
          automated: {
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
          icon: <CheckCircle2 className="w-12 h-12" />,
          title: 'Elimine Erros',
          description: 'Integração automática entre sistemas'
        },
        {
          icon: <Timer className="w-12 h-12" />,
          title: 'Economize Tempo',
          description: 'Economize tempo e reduza custos operacionais com processos automatizados'
        },
        {
          icon: <Eye className="w-12 h-12" />,
          title: 'Visibilidade Total',
          description: 'Obtenha visibilidade total dos processos em tempo real com dashboards personalizados'
        },
        {
          icon: <Rocket className="w-12 h-12" />,
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
      title: 'O Que Nossos Clientes Dizem',
      subtitle: 'Histórias reais de transformação com automação inteligente',
      items: [
        {
          quote: 'Reduzimos o tempo de processamento de pedidos em 73% e praticamente eliminamos os erros de entrada de dados. O ROI foi alcançado em menos de 3 meses.',
          author: 'Carlos Mendes',
          role: 'Diretor de Operações, TechSolutions'
        },
        {
          quote: 'Nossa equipe de suporte agora resolve 40% mais tickets por dia, e nossos clientes estão mais satisfeitos com o tempo de resposta. A automação transformou nossa operação.',
          author: 'Ana Soares',
          role: 'Gerente de Atendimento, ServiceDesk Pro'
        },
        {
          quote: 'Os dashboards em tempo real nos deram visibilidade que nunca tivemos antes. Agora tomamos decisões baseadas em dados atualizados, não em relatórios da semana passada.',
          author: 'Marcelo Alves',
          role: 'CEO, LogisticaMaster'
        }
      ]
    },
    cta: {
      title: 'Pronto para Transformar sua Operação?',
      subtitle: 'Agende uma call para receber uma proposta personalizada de automação inteligente para seu negócio',
      button: 'Agendar Consultoria Gratuita'
    },
    form: {
      title: 'Comece Agora',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      company: 'Empresa',
      submit: 'Receber Proposta Personalizada',
      privacy: 'Seus dados estão seguros conosco. Não compartilhamos suas informações.'
    },
    footer: {
      rights: '© 2024 AutomatizaPro. Todos os direitos reservados.'
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
          icon: <Package className="w-8 h-8" />,
          title: 'Processamento de Pedidos',
          manual: {
            metrics: [
              '4 horas/dia',
              '30 minutos por pedido',
              '20% de retrabalho',
              'Produtividade: 20%'
            ]
          },
          automated: {
            metrics: [
              '45 segundos por pedido',
              'Integração entre sistemas',
              '0% de retrabalho',
              'Produtividade: 90% (+350%)'
            ]
          }
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: 'Atendimento ao Cliente',
          manual: {
            metrics: [
              '1h+ para resposta',
              'Horário comercial limitado',
              'Eficiência: 20%'
            ]
          },
          automated: {
            metrics: [
              'Respostas instantâneas',
              '24/7 sem custo adicional',
              'Eficiência: 95% (+375%)'
            ]
          }
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Relatórios Gerenciais',
          manual: {
            metrics: [
              '4 horas/semana',
              'Dados desatualizados',
              'Precisão: 70%'
            ]
          },
          automated: {
            metrics: [
              'Atualização contínua',
              'Dados em tempo real',
              'Precisão: 99% (+41%)'
            ]
          }
        },
        {
          icon: <Warehouse className="w-8 h-8" />,
          title: 'Gestão de Stock',
          manual: {
            metrics: [
              '2 dias para atualização',
              '10% de discrepância',
              'Pedidos desatualizados',
              'Precisão: 75%'
            ]
          },
          automated: {
            metrics: [
              'Atualização em tempo real',
              '0% de discrepância',
              'Reposição automática',
              'Precisão: 99% (+32%)'
            ]
          }
        },
        {
          icon: <Receipt className="w-8 h-8" />,
          title: 'Faturação',
          manual: {
            metrics: [
              '/semana',
              '5% de erros',
              'Atrasos no envio',
              'Eficiência: 40%'
            ]
          },
          automated: {
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
          icon: <CheckCircle2 className="w-12 h-12" />,
          title: 'Elimine Erros',
          description: 'Integração automática entre sistemas'
        },
        {
          icon: <Timer className="w-12 h-12" />,
          title: 'Poupe Tempo',
          description: 'Poupe tempo e reduza custos operacionais com processos automatizados'
        },
        {
          icon: <Eye className="w-12 h-12" />,
          title: 'Visibilidade Total',
          description: 'Obtenha visibilidade total dos processos em tempo real com dashboards personalizados'
        },
        {
          icon: <Rocket className="w-12 h-12" />,
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
      title: 'O Que Os Nossos Clientes Dizem',
      subtitle: 'Histórias reais de transformação com automação inteligente',
      items: [
        {
          quote: 'Reduzimos o tempo de processamento de pedidos em 73% e praticamente eliminámos os erros de entrada de dados. O ROI foi alcançado em menos de 3 meses.',
          author: 'Carlos Mendes',
          role: 'Diretor de Operações, TechSolutions'
        },
        {
          quote: 'A nossa equipa de suporte agora resolve 40% mais tickets por dia, e os nossos clientes estão mais satisfeitos com o tempo de resposta. A automação transformou a nossa operação.',
          author: 'Ana Soares',
          role: 'Gerente de Atendimento, ServiceDesk Pro'
        },
        {
          quote: 'Os dashboards em tempo real deram-nos visibilidade que nunca tivemos antes. Agora tomamos decisões baseadas em dados atualizados, não em relatórios da semana passada.',
          author: 'Marcelo Alves',
          role: 'CEO, LogisticaMaster'
        }
      ]
    },
    cta: {
      title: 'Pronto para Transformar a sua Operação?',
      subtitle: 'Agende uma call para receber uma proposta personalizada de automação inteligente para o seu negócio',
      button: 'Agendar Consultoria Gratuita'
    },
    form: {
      title: 'Comece Agora',
      name: 'Nome',
      email: 'Email',
      phone: 'Telefone',
      company: 'Empresa',
      submit: 'Receber Proposta Personalizada',
      privacy: 'Os seus dados estão seguros connosco. Não partilhamos as suas informações.'
    },
    footer: {
      rights: '© 2024 AutomatizaPro. Todos os direitos reservados.'
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
      title: 'Real Automation Case Studies',
      cases: [
        {
          icon: <Package className="w-8 h-8" />,
          title: 'Order Processing',
          manual: {
            metrics: [
              '4 hours/day',
              '30 minutes per order',
              '20% rework',
              'Productivity: 20%'
            ]
          },
          automated: {
            metrics: [
              '45 seconds per order',
              'System integration',
              '0% rework',
              'Productivity: 90% (+350%)'
            ]
          }
        },
        {
          icon: <MessageCircle className="w-8 h-8" />,
          title: 'Customer Service',
          manual: {
            metrics: [
              '1h+ response time',
              'Limited business hours',
              'Efficiency: 20%'
            ]
          },
          automated: {
            metrics: [
              'Instant responses',
              '24/7 no extra cost',
              'Efficiency: 95% (+375%)'
            ]
          }
        },
        {
          icon: <FileText className="w-8 h-8" />,
          title: 'Management Reports',
          manual: {
            metrics: [
              '2 minutes/week',
              'Outdated data',
              'Accuracy: 70%'
            ]
          },
          automated: {
            metrics: [
              'Continuous updates',
              'Real-time data',
              'Accuracy: 99% (+41%)'
            ]
          }
        },
        {
          icon: <Warehouse className="w-8 h-8" />,
          title: 'Inventory Management',
          manual: {
            metrics: [
              '2 days for updates',
              '10% discrepancy',
              'Outdated orders',
              'Accuracy: 75%'
            ]
          },
          automated: {
            metrics: [
              'Real-time updates',
              '0% discrepancy',
              'Automatic replenishment',
              'Accuracy: 99% (+32%)'
            ]
          }
        },
        {
          icon: <Receipt className="w-8 h-8" />,
          title: 'Billing',
          manual: {
            metrics: [
              '3 hours/week',
              '5% errors',
              'Delayed sending',
              'Efficiency: 40%'
            ]
          },
          automated: {
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
      subtitle: 'Transform your operation with real, measurable benefits',
      items: [
        {
          icon: <CheckCircle2 className="w-12 h-12" />,
          title: 'Eliminate Errors',
          description: 'Automatic integration between systems'
        },
        {
          icon: <Timer className="w-12 h-12" />,
          title: 'Save Time',
          description: 'Save time and reduce operational costs with automated processes'
        },
        {
          icon: <Eye className="w-12 h-12" />,
          title: 'Total Visibility',
          description: 'Get total visibility of processes in real-time with customized dashboards'
        },
        {
          icon: <Rocket className="w-12 h-12" />,
          title: 'Agile Decisions',
          description: 'Ensure agile decisions with interactive dashboards and automatic alerts'
        }
      ]
    },
    implementation: {
      title: 'Implementation Timeline',
      subtitle: 'A structured process to ensure your automation success',
      steps: [
        {
          title: 'Mapping and Mining',
          description: 'Complete mapping of current processes (AS-IS) and identification of improvement opportunities'
        },
        {
          title: 'TO-BE Definition',
          description: 'TO-BE delivery with definition of all technical integrations (APIs, CRM, ERP, IoT, workflow triggers)'
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
      title: 'What Our Clients Say',
      subtitle: 'Real stories of transformation with intelligent automation',
      items: [
        {
          quote: 'We reduced order processing time by 73% and practically eliminated data entry errors. ROI was achieved in less than 3 months.',
          author: 'Carlos Mendes',
          role: 'Operations Director, TechSolutions'
        },
        {
          quote: 'Our support team now resolves 40% more tickets per day, and our customers are more satisfied with response times. Automation transformed our operation.',
          author: 'Ana Soares',
          role: 'Service Manager, ServiceDesk Pro'
        },
        {
          quote: 'Real-time dashboards gave us visibility we never had before. Now we make decisions based on current data, not last week\'s reports.',
          author: 'Marcelo Alves',
          role: 'CEO, LogisticaMaster'
        }
      ]
    },
    cta: {
      title: 'Ready to Transform Your Operation?',
      subtitle: 'Schedule a call to receive a personalized intelligent automation proposal for your business',
      button: 'Schedule Free Consultation'
    },
    form: {
      title: 'Start Now',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      company: 'Company',
      submit: 'Get Personalized Proposal',
      privacy: 'Your data is safe with us. We do not share your information.'
    },
    footer: {
      rights: '© 2024 AutomatizaPro. All rights reserved.'
    }
  }
};

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: ''
  });

  const [language, setLanguage] = useState('pt-BR');
  const [currentCaseIndex, setCurrentCaseIndex] = useState(0);
  const t = content[language];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const nextCase = () => {
    setCurrentCaseIndex((prev) => 
      prev === t.caseStudies.cases.length - 1 ? 0 : prev + 1
    );
  };

  const prevCase = () => {
    setCurrentCaseIndex((prev) => 
      prev === 0 ? t.caseStudies.cases.length - 1 : prev - 1
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Language Switcher */}
      <div className="bg-gray-900 text-white py-2">
        <div className="container mx-auto px-6 flex justify-end space-x-4">
          <button 
            onClick={() => setLanguage('pt-BR')}
            className={`px-3 py-1 rounded ${language === 'pt-BR' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            Português (BR)
          </button>
          <button 
            onClick={() => setLanguage('pt-PT')}
            className={`px-3 py-1 rounded ${language === 'pt-PT' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            Português (PT)
          </button>
          <button 
            onClick={() => setLanguage('en')}
            className={`px-3 py-1 rounded ${language === 'en' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          >
            English
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <header className="bg-white">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold">AutomatizaPro</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              {t.nav.contact}
            </button>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            {t.hero.title}
          </h1>
          <p className="text-2xl text-gray-700 mb-4">
            {t.hero.subtitle}
          </p>
          <p className="text-xl text-gray-600 mb-8">
            {t.hero.description}
          </p>
          <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105">
            {t.hero.cta}
            <ArrowRight className="inline ml-2 h-5 w-5" />
          </button>
        </div>
      </header>

      {/* Case Studies Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">{t.caseStudies.title}</h2>
          
          <div className="relative">
            <button 
              onClick={prevCase}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
            
            <button 
              onClick={nextCase}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center justify-center mb-8">
                  {t.caseStudies.cases[currentCaseIndex].icon}
                  <h3 className="text-2xl font-bold ml-4">{t.caseStudies.cases[currentCaseIndex].title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {/* Manual Process */}
                  <div className="space-y-4">
                    <div className="flex items-center text-red-600 mb-4">
                      <XCircle className="w-6 h-6 mr-2" />
                      <h4 className="text-xl font-semibold">Processo Manual</h4>
                    </div>
                    <ul className="space-y-3">
                      {t.caseStudies.cases[currentCaseIndex].manual.metrics.map((metric, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <AlertCircle className="w-4 h-4 text-red-400 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Automated Process */}
                  <div className="space-y-4">
                    <div className="flex items-center text-green-600 mb-4">
                      <CheckCircle2 className="w-6 h-6 mr-2" />
                      <h4 className="text-xl font-semibold">Processo Automatizado</h4>
                    </div>
                    <ul className="space-y-3">
                      {t.caseStudies.cases[currentCaseIndex].automated.metrics.map((metric, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-400 mr-2" />
                          {metric}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50 to-purple-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">{t.benefits.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16">{t.benefits.subtitle}</p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.benefits.items.map((benefit, index) => (
              <div 
                key={index}
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="mb-6 text-blue-600">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">{t.implementation.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16">{t.implementation.subtitle}</p>
          
          <div className="max-w-4xl mx-auto">
            {t.implementation.steps.map((step, index) => (
              <div key={index} className="relative flex items-start mb-12 last:mb-0">
                <div className="flex items-center justify-center w-12 h-12 bg-blue-600 rounded-full text-white font-bold">
                  {index + 1}
                </div>
                {index < t.implementation.steps.length - 1 && (
                  <div className="absolute left-6 top-12 w-0.5 h-16 bg-blue-200" />
                )}
                <div className="ml-8">
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">{t.testimonials.title}</h2>
          <p className="text-xl text-gray-600 text-center mb-16">{t.testimonials.subtitle}</p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {t.testimonials.items.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <Quote className="w-12 h-12 text-blue-200 mb-6" />
                <p className="text-gray-700 mb-6">{testimonial.quote}</p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">{t.cta.title}</h2>
          <p className="text-xl mb-8">{t.cta.subtitle}</p>
          <button className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
            {t.cta.button}
          </button>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-3xl font-bold text-center mb-16">{t.form.title}</h2>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.form.name}
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.form.email}
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.form.phone}
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                {t.form.company}
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({...formData, company: e.target.value})}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              />
            </div>
            
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              {t.form.submit}
            </button>
          </form>
          
          <p className="text-center text-sm text-gray-500 mt-6">
            {t.form.privacy}
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Zap className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">AutomatizaPro</span>
            </div>
            <p className="text-gray-400">{t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;