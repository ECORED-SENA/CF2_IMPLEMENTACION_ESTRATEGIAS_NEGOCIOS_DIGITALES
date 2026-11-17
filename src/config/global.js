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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
