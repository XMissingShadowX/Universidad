# Universidad

Portafolio académico estático con los trabajos de materias universitarias.

## Arquitectura de carpetas

```
Universidad/
├── README.md
├── index.html                        # Menú principal de materias
├── Desarrollo Sustentable/
│   ├── index.html                    # Página de la materia
│   └── purepechas/
│       └── purepechas.html           # Proyecto interactivo sobre la cultura Purépecha
└── Etica/
    ├── index.html                    # Página de la materia
    └── Jeopardy mexicas/             # Juego tipo Jeopardy sobre cultura mexica
        ├── jeopardyMexicas.html      # Página del juego
        ├── style.css                 # Estilos
        ├── script.js                 # Lógica del juego
        └── data.js                   # Categorías, preguntas y respuestas
```

## Cómo usarlo

Abre `index.html` en el navegador y navega por las materias. Desde ahí se accede a cada materia.

Las páginas enlazan entre sí con rutas relativas, por lo que deben conservar esta estructura.

## Tecnologías

HTML, CSS, JavaScript y Tailwind CSS (en la página de Purépechas).
