export default {
  global: {
    componenteFormativo:
      'Introducción a los sistemas de gestión de bases de datos MySQL',
    descripcionCurso:
      'En la actualidad, un gran porcentaje de software y aplicativos que se encuentran en el mercado hacen uso de bases de datos con MySQL. Además, es de vital importancia contar con una gestión eficiente de la gran cantidad de información que se genera diariamente a través de múltiples dispositivos. Las bases de datos bien gestionadas marcan una ventaja competitiva entre las diferentes empresas.<br><br>En consecuencia, los diferentes sectores productivos de la economía colombiana se encuentran en la búsqueda de personal con las mejores capacidades laborales y profesionales que cuenten con el dominio en la administración y manipulación de bases de datos, para así contribuir al desarrollo económico, social y tecnológico de su entorno y del país.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos iniciales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Datos e información',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'El almacenamiento de los datos',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Sistemas de bases de datos',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Metodología de diseño de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Modelos de datos conceptuales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Modelos de datos lógicos',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Modelo de datos físico ',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Sistemas de gestión de bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Introducción',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Características',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'MySQL',
            hash: 't_3_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
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
  creditos: {
    liderEquipo: {
      nombre: 'Maria Camila Garcia Santamaria',
      cargo: 'Líder del equipo',
    },
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Henry Eduardo Bastidas Paruma',
        cargo: 'Experto temático instructor',
        centro: 'Centro de teleinformática y producción industrial',
        regional: 'Regional Cauca',
      },
      {
        nombre: 'Tania Yaneth Ramírez Benítez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
      {
        nombre: 'Gloria Esperanza Ortiz Russi',
        cargo: 'Diseñadora y evaluadora instruccional',
        centro: 'Centro de diseño y metrología',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Revisión metodológica y pedagógica',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
      {
        nombre: 'Martha Isabel Martínez Vargas',
        cargo: 'Corrección de estilo',
        centro: 'Centro para la industria de la comunicación gráfica',
        regional: 'Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
      },
      {
        nombre: 'Yuly Rey',
        cargo: 'Diseño web',
      },
      {
        nombre: [
          'Zuleidy Maria Ruiz Torres',
          'Wilson Andrés Arenales Caceres',
          'Gilberto Junior Rodriguez Rodriguez',
          'Carolina Tamayo',
          'Lina Marcela Perez',
          'Carlos Eduardo Garavito',
        ],
        cargo: 'Producción audiovisual',
      },
      {
        nombre: 'Daniel Ricardo Mutis Gómez',
        cargo: 'Desarrollo Front-End',
      },
      {
        centro: 'Centro industrial del diseño y la manufactura',
        regional: 'Regional Santander',
      },
      {
        nombre: 'Jhon Jairo Urueta Alvarez',
        cargo: 'Desarrollo front-end',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de comercio y servicios',
        regional: 'Regional Tolima',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Carrión, J. (2017). Diferencia entre datos, información y conocimiento.',
      link:
        'http://iibi.unam.mx/voutssasmt/documentos/dato%20informacion%20conocimiento.pdf',
    },
    {
      referencia:
        'Cobo, Á. (2007). Diseño y programación de bases de datos. Visión Libros.',
    },
    {
      referencia: 'Edu4Java. (2018). SQL con MySQL.',
      link: 'http://www.edu4java.com/es/sql/sql6.html',
    },
    {
      referencia: 'Emagister. (2020). Guía de orientación.',
      link: 'https://www.emagister.com/blog/datos-informacion-conocimiento',
    },
    {
      referencia: 'GitHub. (2017). Fundamentos de bases de datos.',
      link: 'https://github.com/yomar-dev/fundamentos-bd',
    },
    {
      referencia: 'Guebs. (2001). MySQL. Capítulo 1. Información general.',
      link: 'https://manuales.guebs.com/mysql-5.0/introduction.html',
    },
    {
      referencia: 'Pérez, D. (2010). Bases de datos línea.',
      link: 'https://www.uoc.edu/pdf/masters/oficiales/img/913.pdf',
    },
    {
      referencia:
        'Piñeiro, G., J. (2013). Bases de datos relacionales y modelado de datos. Ediciones Paraninfo, S.A.',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'colección de datos estructurados, organizados, sin duplicidad y dispuestos con el objetivo de proporcionar información a los usuarios de manera centralizada y permitiendo desarrollar sobre ellas transacciones (Emagíster, 2020).',
    },
    {
      termino: 'Datos',
      significado:
        'los datos son la mínima unidad semántica, y se corresponden con elementos primarios de información que por sí solos son irrelevantes como apoyo a la toma de decisiones (Emagíster, 2020).',
    },
    {
      termino: 'Información',
      significado:
        'conjunto de datos procesados y que tienen un significado (relevancia, propósito y contexto), y que por lo tanto son de utilidad para quién debe tomar decisiones (Emagíster, 2020).',
    },
    {
      termino: 'MySQL',
      significado:
        'es un sistema de gestión de base de datos relacional (RDBMS) de código abierto, basado en lenguaje de consulta estructurado (SQL) (EduJava, 2018).',
    },
    {
      termino: 'SGDB',
      significado:
        'Sistema de gestión de base de datos o DGBA (Data Base Management System); es un conjunto de programas no visibles que administran y gestionan la información que contiene una base de datos Los gestores de base de datos o gestores de datos hacen posible administrar todo acceso a la base de datos ya que tienen el objetivo de servir de interfaz entre ésta, el usuario y las aplicaciones (GitHub, 2017).',
    },
  ],
  complementario: [
    {
      texto: 'Diseño de bases de datos relacionales | | UPV',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=-tuDXYWn3fQ',
    },
  ],
}
