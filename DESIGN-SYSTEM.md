# Sistema de Diseño Talentum

Guía completa del sistema de diseño escalable para Talentum. Todos los colores y estilos están centralizados en variables CSS para facilitar cambios globales.

## 📋 Tabla de Contenidos

- [Colores](#colores)
- [Tipografía](#tipografía)
- [Espaciado](#espaciado)
- [Componentes](#componentes)
- [Utilidades](#utilidades)
- [Buenas Prácticas](#buenas-prácticas)

## 🎨 Colores

### Cambiar Colores de Marca

Para cambiar los colores principales de toda la aplicación, edita las variables en `src/styles/global.css`:

```css
:root {
  /* Colores Principales de Marca */
  --color-brand-primary: #DC2626;        /* Rojo principal */
  --color-brand-primary-dark: #B91C1C;   /* Rojo oscuro */
  --color-brand-primary-light: #EF4444;  /* Rojo claro */

  /* Colores Secundarios (Negro) */
  --color-brand-secondary: #0F172A;      /* Negro principal */
  --color-brand-secondary-light: #1E293B;
  --color-brand-secondary-dark: #020617;
}
```

### Paleta Completa

#### Colores de Marca
- `--color-brand-primary`: Color principal (#DC2626 - Rojo Talentum)
- `--color-brand-primary-dark`: Variante oscura para hovers
- `--color-brand-primary-light`: Variante clara
- `--color-brand-primary-50`: Muy claro para fondos
- `--color-brand-primary-100`: Claro para fondos

#### Colores de Superficie
- `--color-surface-primary`: Fondo principal (#FFFFFF)
- `--color-surface-secondary`: Fondo secundario (gris claro)
- `--color-surface-tertiary`: Fondo terciario
- `--color-surface-dark`: Fondo oscuro

#### Colores de Texto (Optimizados para Contraste WCAG AA)
- `--color-text-primary`: Texto principal oscuro (#0F172A)
- `--color-text-secondary`: Texto secundario (#475569)
- `--color-text-tertiary`: Texto terciario (#64748B)
- `--color-text-inverse`: Texto sobre fondos oscuros (#FFFFFF)
- `--color-text-muted`: Texto deshabilitado

### Uso en Componentes

#### Método 1: Clases Utilitarias
```html
<!-- Fondos -->
<div class="bg-brand-primary">...</div>
<div class="bg-surface-secondary">...</div>

<!-- Textos -->
<p class="text-primary">...</p>
<p class="text-secondary">...</p>
<span class="text-brand-primary">...</span>
```

#### Método 2: CSS Variables
```html
<div style="background-color: var(--color-brand-primary);">...</div>
<p style="color: var(--color-text-secondary);">...</p>
```

## 🔤 Tipografía

### Variables Disponibles

```css
--font-sans: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto...
--font-weight-normal: 400
--font-weight-medium: 500
--font-weight-semibold: 600
--font-weight-bold: 700
```

### Jerarquía de Textos

Todos los encabezados (h1-h6) usan automáticamente:
- Color: `var(--color-text-primary)`
- Font-weight: `var(--font-weight-bold)`
- Tracking: tight

Los párrafos usan:
- Color: `var(--color-text-secondary)`
- Line-height: 1.7

## 📏 Espaciado

### Escala de Espaciado

```css
--spacing-xs: 0.25rem;   /* 4px */
--spacing-sm: 0.5rem;    /* 8px */
--spacing-md: 1rem;      /* 16px */
--spacing-lg: 1.5rem;    /* 24px */
--spacing-xl: 2rem;      /* 32px */
--spacing-2xl: 3rem;     /* 48px */
--spacing-3xl: 4rem;     /* 64px */
```

### Border Radius

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
--radius-2xl: 1.5rem;    /* 24px */
--radius-full: 9999px;
```

## 🧩 Componentes

### Botones

#### Botón Primario
```html
<button class="btn-primary">
  Acción Principal
</button>
```

#### Botón Secundario
```html
<button class="btn-secondary">
  Acción Secundaria
</button>
```

#### Botón Oscuro
```html
<button class="btn-dark">
  Acción Oscura
</button>
```

### Tarjetas (Cards)

#### Tarjeta Básica
```html
<div class="card-elevated">
  <h3>Título</h3>
  <p>Contenido</p>
</div>
```

#### Tarjeta con Hover
```html
<div class="card-hover">
  <!-- Se eleva al pasar el mouse -->
</div>
```

### Gradientes

```html
<!-- Gradiente Principal (Rojo) -->
<div class="gradient-primary">...</div>

<!-- Gradiente Secundario (Negro) -->
<div class="gradient-secondary">...</div>

<!-- Gradiente Mixto -->
<div class="gradient-accent">...</div>

<!-- Texto con Gradiente -->
<h1 class="gradient-text">Título</h1>
```

## 🛠️ Utilidades

### Layout

```html
<!-- Contenedor Responsive -->
<div class="container-custom">...</div>

<!-- Padding de Sección -->
<section class="section-padding">...</section>
```

### Efectos

```html
<!-- Efecto Vidrio -->
<div class="glass-effect">...</div>
<div class="glass-effect-dark">...</div>

<!-- Animación Flotante -->
<div class="floating">...</div>

<!-- Fade In Up -->
<div class="fade-in-up">...</div>
```

### Truncar Texto

```html
<!-- Limitar a 2 líneas -->
<p class="truncate-2">Texto largo...</p>

<!-- Limitar a 3 líneas -->
<p class="truncate-3">Texto largo...</p>
```

### Aspect Ratios

```html
<div class="aspect-video">16:9</div>
<div class="aspect-square">1:1</div>
```

## ✨ Buenas Prácticas

### 1. Accesibilidad

#### Contraste de Colores
- **Texto principal**: Usa `text-primary` (contraste 16:1)
- **Texto secundario**: Usa `text-secondary` (contraste 7:1)
- **Mínimo WCAG AA**: 4.5:1 para texto normal
- **Mínimo WCAG AAA**: 7:1 para texto normal

#### ARIA Labels
```html
<button class="btn-primary" aria-label="Descripción clara">
  Botón
</button>

<svg aria-hidden="true">...</svg>
```

#### Skip Links
```html
<a href="#main-content" class="skip-to-content">
  Saltar al contenido principal
</a>
```

### 2. Performance

#### Lazy Loading
```html
<img
  src="placeholder.jpg"
  data-src="image.jpg"
  loading="lazy"
  alt="Descripción"
/>
```

#### Skeleton Screens
```html
<div class="skeleton" style="width: 200px; height: 20px;"></div>
```

### 3. Responsive Design

#### Mobile First
```css
/* Mobile por defecto */
.elemento {
  padding: var(--spacing-md);
}

/* Tablet */
@media (min-width: 768px) {
  .elemento {
    padding: var(--spacing-lg);
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .elemento {
    padding: var(--spacing-xl);
  }
}
```

### 4. Dark Mode

El sistema ya está preparado para dark mode:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --color-surface-primary: var(--color-gray-900);
    --color-text-primary: #F8FAFC;
    /* ... más variables */
  }
}
```

### 5. Reduced Motion

Respetar preferencias de usuario:

```css
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

## 🔄 Transiciones

### Variables de Transición

```css
--transition-fast: 150ms ease
--transition-base: 300ms cubic-bezier(0.4, 0, 0.2, 1)
--transition-slow: 500ms cubic-bezier(0.4, 0, 0.2, 1)
```

### Uso

```css
.elemento {
  transition: var(--transition-base);
}
```

## 📱 Z-Index Scale

```css
--z-base: 0
--z-dropdown: 1000
--z-sticky: 1020      /* Header sticky */
--z-fixed: 1030
--z-modal-backdrop: 1040
--z-modal: 1050
--z-popover: 1060
--z-tooltip: 1070
```

## 🎯 SEO

### Schema.org
El layout incluye Schema.org mejorado:
- ProfessionalService
- BreadcrumbList
- AggregateRating
- LocalBusiness

### Open Graph
- Imágenes optimizadas (1200x630)
- Locale: es_MX
- Rich metadata

### Performance
- DNS Prefetch
- Preconnect
- Prefetch on hover
- Lazy loading automático

## 📝 Ejemplos Completos

### Hero Section
```html
<section class="relative min-h-screen gradient-secondary">
  <div class="container-custom">
    <h1 class="text-inverse fade-in-up">
      Título Principal
      <span class="gradient-text">Destacado</span>
    </h1>
    <p class="text-inverse opacity-80">Descripción</p>
    <button class="btn-primary">Call to Action</button>
  </div>
</section>
```

### Card Section
```html
<section class="section-padding bg-surface-secondary">
  <div class="container-custom">
    <div class="card-elevated card-hover p-8">
      <h3 class="text-primary">Título</h3>
      <p class="text-secondary">Contenido con buen contraste</p>
    </div>
  </div>
</section>
```

---

## 🚀 Inicio Rápido

1. **Cambiar color principal**: Edita `--color-brand-primary` en `global.css`
2. **Usar en componentes**: Aplica clases como `bg-brand-primary`, `text-primary`
3. **Mantener contraste**: Usa siempre las combinaciones de color recomendadas
4. **Responsive**: El sistema es mobile-first por defecto

Para más información, consulta los archivos:
- `src/styles/global.css` - Variables y utilidades
- `src/layouts/Layout.astro` - SEO y estructura
- `src/pages/[lang]/index.astro` - Ejemplos de uso
