export default {
  global: {
    Name: 'Planeación y ejecución de estrategias digitales',
    Description:
      'Este componente aborda la estructuración de estrategias de mercadeo digital, la definición y priorización de tácticas, la planificación de acciones y la organización de los recursos necesarios para su ejecución. Asimismo, desarrolla los principios de la comunicación digital, la formulación de mensajes y los criterios de coherencia comunicativa necesarios para orientar las acciones en diferentes medios digitales.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.png',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Estrategia de mercadeo digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto y propósito de la estrategia digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Relación entre objetivos y estrategia',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Fundamentos del <i>e-marketing</i>',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Estructura de una estrategia digital',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo: 'Integración de acciones digitales',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Tácticas para la estrategia digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Concepto y función de las tácticas digitales',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Diferencia entre estrategia, táctica y acción',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Tipos de tácticas digitales',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Relación entre tácticas y objetivos de campaña	',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Priorización de tácticas digitales',
            hash: 't_2_5',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Planificación y ejecución de acciones digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Definición de acciones digitales	',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Organización de actividades y recursos	',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Responsables y tiempos de ejecución	',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Guías y lineamientos de ejecución',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Seguimiento operativo de las acciones',
            hash: 't_3_5',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Estrategia de comunicación digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Fundamentos de la comunicación digital	',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Propósito y enfoque del mensaje',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Identidad y coherencia comunicativa',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo: 'Adaptación del mensaje al medio digital',
            hash: 't_4_4',
          },
          {
            numero: '4.5',
            titulo: 'Lineamientos para la comunicación comercial',
            hash: 't_4_5',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Acción digital',
      significado: 'actividad concreta que utiliza recursos tecnológicos para materializar una táctica.',
    },
    {
      termino: 'Adaptación del mensaje',
      significado: 'ajuste del mensaje al medio digital conservando su propósito e información esencial.',
    },
    {
      termino: 'Audiencia',
      significado: 'personas o grupos a quienes se dirigen las acciones y mensajes de una organización.',
    },
    {
      termino: 'Coherencia comunicativa',
      significado: 'correspondencia entre mensajes, información, identidad organizacional y experiencia ofrecida en los distintos medios.',
    },
    {
      termino: 'Comunicación comercial',
      significado: 'mensajes sobre promoción, presentación y comercialización de productos o servicios.',
    },
    {
      termino: 'Comunicación digital',
      significado: 'intercambio de información mediante tecnologías y medios digitales entre organizaciones y usuarios.',
    },
    {
      termino: 'Conversión',
      significado: 'realización de una acción relevante para el negocio, como registrarse, solicitar información o comprar.',
    },
    {
      termino: 'Estrategia digital',
      significado: 'orientación general que articula objetivos, públicos, medios y recursos para alcanzar resultados.',
    },
    {
      termino: 'Fidelización',
      significado: 'proceso orientado a fortalecer la relación con clientes mediante atención, acompañamiento y beneficios pertinentes.',
    },
    {
      termino: 'Identidad verbal',
      significado: 'características de expresión organizacional, como tono, estilo, vocabulario y nivel de formalidad.',
    },
    {
      termino: 'Identidad visual',
      significado: 'elementos gráficos que permiten reconocer una organización, como colores, tipografías, logotipos e imágenes.',
    },
    {
      termino: 'Incidencia',
      significado: 'situación no prevista que afecta la ejecución de una actividad y requiere atención.',
    },
    {
      termino: 'Integración de acciones digitales',
      significado: 'coordinación de actividades y medios para contribuir a una finalidad común.',
    },
    {
      termino: 'Interacción',
      significado: 'acción o intercambio entre organizaciones y usuarios mediante consultas, conversaciones o participación digital.',
    },
    {
      termino: 'Llamado a la acción',
      significado: 'indicación que orienta al público hacia una respuesta concreta y pertinente.',
    },
    {
      termino: 'Mercadeo electrónico',
      significado: 'aplicación de principios y actividades de mercadeo mediante tecnologías y medios digitales.',
    },
    {
      termino: 'Objetivo de campaña',
      significado: 'resultado esperado que orienta la estrategia, las tácticas y las acciones digitales.',
    },
    {
      termino: 'Planificación de acciones digitales',
      significado: 'organización de actividades, recursos, responsables, tiempos y lineamientos para ejecutar tácticas.',
    },
    {
      termino: 'Priorización de tácticas',
      significado: 'ordenamiento de tácticas según objetivos, pertinencia, viabilidad, impacto esperado y esfuerzo requerido.',
    },
    {
      termino: 'Propuesta de valor',
      significado: 'beneficios y diferenciadores de una oferta que responde a necesidades del público.',
    },
    {
      termino: 'Punto de contacto',
      significado: 'medio donde una persona obtiene información o interactúa con una organización.',
    },
    {
      termino: 'Seguimiento operativo',
      significado: 'revisión del avance y cumplimiento de actividades para identificar incidencias y realizar ajustes.',
    },
    {
      termino: 'Táctica digital',
      significado: 'forma específica de actuación que desarrolla una estrategia y orienta acciones concretas.',
    },
    {
      termino: 'Viabilidad',
      significado: 'posibilidad de ejecutar una táctica o acción según los recursos y capacidades disponibles.',
    },
    {
      termino: 'Visibilidad',
      significado: 'posibilidad de que el público encuentre o reconozca una organización, producto o servicio.',
    }
  ],
  referencias: [
    {
    referencia: 'Asana. (s. f.). Plantilla gratuita de matriz de priorización para tareas.',
    link: 'https://asana.com/es/templates/prioritization-matrix',
    },
    {
      referencia: 'Camacho, K. (2026, 30 de marzo). Qué son las audiencias en marketing + ejemplos reales. DesignPlus.',
      link: 'https://designplus.co/blog/marketing-digital/que-son-audiencias-marketing/',
    },
    {
      referencia: 'Gomez Albrecht, M., Green, M., & Hoffman, L. (2023). Principles of marketing. OpenStax.',
      link: 'https://openstax.org/books/principles-marketing/pages/1-unit-introduction',
    },
    {
      referencia: 'PR Smith Marketing. (s. f.). SOSTAC® 1-day masterclass – AI enabled.',
      link: 'https://prsmith.org/sostac/',
    },
    {
      referencia: 'Superintendencia de Industria y Comercio. (s. f.). Información engañosa.',
      link: 'https://sedeelectronica.sic.gov.co/temas/proteccion-al-consumidor/derechos-y-deberes/Informacion-enganosa',
    },
    {
      referencia: 'Theriault, A. (2024, 10 de octubre). What is audience development? Lotame.',
      link: 'https://www.lotame.com/resources/what-is-audience-development/',
    }
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
