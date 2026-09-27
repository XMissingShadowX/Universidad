# Universidad

Proyecto estático de portafolio académico para materias y trabajos universitarios, centrado en el curso de Desarrollo Sustentable y en el proyecto sobre la cultura Purépecha.

## Descripción

Este repositorio contiene una estructura de navegación por materias con una landing page general, una sección dedicada a Desarrollo Sustentable y una página de detalle sobre el territorio, la lengua y la identidad purépecha.

## Archivos principales

- `index.html` — menú principal de materias y proyectos.
- `desarrollo-sustentable.html` — presentación de la materia y trabajos relacionados.
- `purepechas.html` — contenido visual e interactivo sobre la cultura purépecha.

## Arquitectura de carpetas

```
Universidad/
├── README.md
├── Desarrollo Sustentable/
│   └── purepechas/
│       ├── index.html                    # Menú principal de materias
│       ├── desarrollo-sustentable.html   # Página de la materia
│       └── purepechas.html               # Proyecto interactivo sobre la cultura Purépecha
└── Etica/
    └── Jeopardy mexicas/         # Juego tipo Jeopardy sobre cultura mexica
        ├── jeopardyMexicas.html  # Página del juego
        ├── style.css             # Estilos
        ├── script.js             # Lógica del juego
        └── data.js               # Categorías, preguntas y respuestas
```

- Las tres páginas HTML enlazan entre sí con rutas relativas, por lo que deben permanecer juntas en la misma carpeta.
- Cada materia nueva con múltiples archivos va en su propia carpeta (como `Etica/`), con un subdirectorio por proyecto.

## Tecnologías

- HTML
- CSS
- JavaScript
- Tailwind CSS (en la página de proyecto)

## Cómo usarlo

1. Abre `Desarrollo Sustentable/purepechas/index.html` en el navegador.
2. Navega por la sección de materias.
3. Explora la información y recursos del proyecto seleccionado.

## Objetivo

Presentar trabajos académicos de forma clara, visual y accesible, con una experiencia más narrativa e interactiva.
