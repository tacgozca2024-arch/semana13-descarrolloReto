# 📌 Pinterest Clone

Una réplica de la página principal de Pinterest con consumo de API real, desarrollada como parte del Módulo 5 de JavaScript y HTTP.

---

## 🚀 Demo

> GitHub Pages
 https://tacgozca2024-arch.github.io/semana13-descarrolloReto/


## 📸 Descripción

Clon de Pinterest que consume la API de Unsplash para mostrar imágenes reales según la búsqueda del usuario. Incluye un diseño artístico propio con partículas animadas y un sidebar oscuro.

---

## ✨ Características

- 🔍 **Buscador funcional** — consume la API de Unsplash en tiempo real
- 🖼️ **Grid Masonry** — diseño de columnas tipo Pinterest
- 💀 **Skeleton loader** — animación de carga mientras llegan las imágenes
- 🖱️ **Hover en cards** — botones de Guardar y Visitar al pasar el cursor
- 🪟 **Modal con detalle** — al hacer clic en una imagen muestra el fotógrafo, likes y botón de descarga
- 🌌 **Partículas animadas** — efecto artístico en el sidebar y fondo
- 👤 **Dropdown de usuario** — tarjeta con perfil, configuración y cerrar sesión
- 📱 **Responsive** — se adapta a distintos tamaños de pantalla

---

## 🛠️ Tecnologías usadas

- HTML5
- CSS3 (modularizado)
- JavaScript (vanilla)
- Bootstrap 5
- Bootstrap Icons
- API de Unsplash

---

## 📁 Estructura del proyecto

```
📁 pinterest-clone/
├── index.html
├── 📁 CSS/
│   ├── style.css
│   ├── reset.css
│   ├── sidebar.css
│   ├── navbar.css
│   ├── grid.css
│   └── modal.css
└── 📁 JS/
    ├── sidebar.js
    ├── fondo.js
    └── apiUnpMod.js
```

---

## 🔧 Instalación

1. Clona el repositorio:
```bash
git clone https://github.com/tu-usuario/pinterest-clone.git
``
2. Abre `index.html` en tu navegador
3. ¡Listo! No necesita instalación de dependencias
---

## 🔑 API

Este proyecto usa la [API de Unsplash](https://unsplash.com/developers). Para usarla necesitas:

1. Crear una cuenta en [unsplash.com/developers](https://unsplash.com/developers)
2. Crear una nueva aplicación y obtener tu **Access Key**
3. Reemplazar la key en `JS/apiUnpMod.js`

---

## 👨‍💻 Autor

**Eduardo Adolfo Gozalo Campos**  
Estudiante de Desarrollo Web — Pachaqtec - IDAT
Módulo 5: Javascript y HTTP — Semana 13

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos.
