export type Project = {
  title: string
  description: string
  tags: string[]
  image?: string
  demoUrl?: string
  apiUrl?: string
  repoUrl?: string
  features: string[]
}

export const projects: Project[] = [
  {
    title: 'Tienda de Productos',
    image: '/projects/TiendaProductos.png',
    description:
      'Aplicación fullstack de e-commerce: visualizar productos, filtrarlos, buscarlos y agregarlos a un carrito de compras, con integración de pagos mediante Mercado Pago.',
    tags: [
      'React',
      'Vite',
      '.NET',
      'EF Core',
      'Mercado Pago',
      'Azure',
      'Vercel',
    ],
    demoUrl: 'https://tienda-de-productos-ivory.vercel.app/',
    apiUrl:
      'https://tiendadeproductos-fmhngcc8czgjd9dk.brazilsouth-01.azurewebsites.net/api/product',
    repoUrl: 'https://github.com/GastonEE01/TiendaDeProductos.git',
    features: [
      'Listado, búsqueda por nombre y filtro por categoría',
      'Carrito de compras con cálculo del total',
      'Modo oscuro / claro y persistencia con localStorage',
      'Notificaciones e integración de checkout con Mercado Pago',
    ],
  },
  {
    title: 'App de Películas',
    image: '/projects/AppPeliculas.png',
    description:
      'App fullstack para gestionar un catálogo de películas, registrarse y administrar una lista de favoritos en la nube, con recomendaciones por IA.',
    tags: [
      'React',
      'Vite',
      '.NET',
      'EF Core',
      'JWT',
      'Gemini AI',
      'Azure',
    ],
    demoUrl: 'https://app-peliculas-three.vercel.app/',
    apiUrl:
      'https://apppeliculas-cqayf8bne0e9fmc2.brazilsouth-01.azurewebsites.net/index.html',
    repoUrl: 'https://github.com/GastonEE01/AppPeliculas.git',
    features: [
      'Autenticación JWT con perfiles individuales',
      'Catálogo de películas con calificación',
      'Gestión de favoritos por usuario con control de duplicados',
      'ChatBot de recomendaciones con integración de Gemini AI',
    ],
  },
  {
    title: 'Dashboard Personal con Widgets',
    image: '/projects/DashboardPersonal.png',
    description:
      'App web donde el usuario se registra, inicia sesión y personaliza su dashboard agregando widgets interactivos que puede arrastrar y acomodar.',
    tags: [
      'React',
      'Vite',
      'React Router',
      '.NET',
      'EF Core',
      'PostgreSQL',
      'Azure',
    ],
    demoUrl: 'https://dashbooard-personal.vercel.app/',
    apiUrl:
      'https://dashboardpersonal-g4ecfmfnehctb4cj.brazilsouth-01.azurewebsites.net/',
    repoUrl: 'https://github.com/GastonEE01/DashbooardPersonal.git',
    features: [
      'Registro e inicio de sesión seguro',
      'Agregar y eliminar widgets dinámicamente',
      'Reloj, notas, frases aleatorias y clima por API externa',
      'Widgets arrastrables y modo oscuro / claro',
    ],
  },
]

export const academicProjects: Project[] = [
  {
    title: 'Simulador de Criptomonedas',
    description:
      'Aplicación web desarrollada en equipo para la simulación de compra, venta e intercambio de criptomonedas. El sistema permite administrar saldo virtual, realizar transacciones, consultar historiales y visualizar la evolución de los precios simulados.',
  tags: ['Java', 'SQL', 'Bootstrap', 'Hibernate', 'JPA', 'Trabajo en equipo'],
    repoUrl: 'https://github.com/JulianKer/TP-Taller-Web-I',
    features: [
      'Registro e inicio de sesión con roles de usuario y administrador',
      'Compra, venta e intercambio de criptomonedas.',
      'Simulación de variación de precios en tiempo real.',
      'Historial de transacciones y generación de reportes.',
      'Gestión de saldo virtual y cartera de inversiones.',
      
    ],
  },
  {
    title: 'Preguntados',
    description:
      'Aplicación web multijugador inspirada en el juego Preguntados. Permite a los usuarios registrarse, participar en partidas basadas en preguntas de distintas categorías y consultar estadísticas de juego. Incluye gestión de usuarios, roles administrativos, generación de reportes y paneles con métricas de actividad.',
    tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Apache', 'Mustache', 'PHPMailer', 'dompdf', 'JpGraph', 'Trabajo en equipo'],
    repoUrl: 'https://github.com/GastonEE01/PW2MVC-PREGUNTADOS.git',
    features: [
    'Registro e inicio de sesión de usuarios.',
    'Sistema de partidas basado en categorías y distintos niveles de dificultad.',
    'Historial de partidas y estadísticas personales.',
    'Generación y visualización de códigos QR con información del usuario.',
    'Creación y reporte de preguntas por parte de los jugadores.',
    'Panel administrativo para moderación y gestión de preguntas.',
    'Dashboard con métricas y gráficos de actividad.',
    'Exportación de reportes en formato PDF.'
    ],
  },
]

export const techStack: { group: string; items: string[] }[] = [
  { group: 'Frontend', items: ['React', 'Vite', 'TypeScript', 'JavaScript', 'React Router', 'CSS'] },
  { group: 'Backend', items: ['C#', '.NET (ASP.NET Core)', 'Entity Framework Core', 'JWT', 'API REST'] },
  { group: 'Base de datos', items: ['PostgreSQL', 'SQL Server', 'Supabase'] },
  { group: 'Herramientas', items: ['Azure App Service', 'Vercel', 'Git'] },
]

export const contact = {
  email: 'estevezgaston01@gmail.com',
  phone: '+54 9 11 6958 1364',
  linkedin: 'https://www.linkedin.com/in/gastonestevez01',
  github: 'https://github.com/GastonEE01',
}


