# Guía de Configuración - Variables de Entorno

Todas las constantes importantes del proyecto ahora se manejan mediante variables de entorno en el archivo `.env`. Esto facilita la configuración y el despliegue en diferentes ambientes.

## 🚀 Configuración Inicial

1. **Copia el archivo de ejemplo**:
   ```bash
   cp .env.example .env
   ```

2. **Edita el archivo `.env`** con tus valores reales

3. **Reinicia el servidor** para que los cambios tomen efecto:
   ```bash
   npm run dev
   ```

## 📋 Variables Disponibles

### 🌐 Configuración del Sitio

```bash
# URL principal del sitio (usado para sitemap y canonical URLs)
PUBLIC_SITE_URL=https://gh360hunting.com

# Nombre de la empresa (usado en todo el sitio)
PUBLIC_COMPANY_NAME=GH360 Hunting

# Tagline de la empresa (usado en footer)
PUBLIC_COMPANY_TAGLINE=Tu socio estratégico en gestión del talento
```

### 📞 Información de Contacto

```bash
# Email principal de contacto
PUBLIC_CONTACT_EMAIL=contact@gh360hunting.com

# Número de WhatsApp (sin + ni espacios)
# Ejemplo: 1234567890 para +1 (234) 567-890
PUBLIC_WHATSAPP_NUMBER=1234567890

# Número de teléfono para mostrar (con formato)
PUBLIC_PHONE_DISPLAY=+1 (234) 567-890
```

### 📱 Redes Sociales

```bash
# URLs de perfiles en redes sociales
PUBLIC_FACEBOOK_URL=https://facebook.com/gh360hunting
PUBLIC_TWITTER_URL=https://twitter.com/gh360hunting
PUBLIC_LINKEDIN_URL=https://linkedin.com/company/gh360hunting
PUBLIC_INSTAGRAM_URL=https://instagram.com/gh360hunting
```

### 🏢 Detalles del Negocio

```bash
# Información para Schema.org structured data
PUBLIC_BUSINESS_COUNTRY=US
PUBLIC_BUSINESS_CITY=New York
PUBLIC_BUSINESS_STATE=NY
PUBLIC_BUSINESS_ZIP=10001

# Horario de atención (formato 24 horas)
PUBLIC_BUSINESS_HOURS_OPEN=09:00
PUBLIC_BUSINESS_HOURS_CLOSE=18:00
```

### 🔍 Configuración SEO

```bash
# Meta Description en Español
PUBLIC_META_DESCRIPTION_ES=Soluciones integrales de recursos humanos...

# Meta Description en Inglés
PUBLIC_META_DESCRIPTION_EN=Comprehensive human resources solutions...

# Keywords en Español (separadas por comas)
PUBLIC_META_KEYWORDS_ES=reclutamiento empresas, selección personal...

# Keywords en Inglés (separadas por comas)
PUBLIC_META_KEYWORDS_EN=corporate recruitment, personnel selection...

# Imagen para Open Graph (relativa a /public)
PUBLIC_OG_IMAGE=/og-image.jpg
```

### ✨ Feature Flags

```bash
# Activar/Desactivar funcionalidades
PUBLIC_ENABLE_WHATSAPP=true
PUBLIC_ENABLE_CONTACT_FORM=true
PUBLIC_ENABLE_TESTIMONIALS=true
```

### 📧 Servicio de Email (Opcional)

Elige **UNA** de estas opciones y descomenta:

```bash
# Opción 1: Resend (Recomendado)
# RESEND_API_KEY=your_resend_api_key

# Opción 2: SendGrid
# SENDGRID_API_KEY=your_sendgrid_api_key

# Opción 3: SMTP
# SMTP_HOST=smtp.gmail.com
# SMTP_PORT=587
# SMTP_USER=your_email@gmail.com
# SMTP_PASS=your_app_password
```

### 📊 Analytics (Opcional)

```bash
# Google Analytics 4
# PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX

# Google Tag Manager
# PUBLIC_GTM_ID=GTM-XXXXXXX

# Facebook Pixel
# PUBLIC_FB_PIXEL_ID=

# Microsoft Clarity
# PUBLIC_CLARITY_ID=
```

## 🔧 Uso en el Código

Todas las variables se importan desde `src/lib/constants.ts`:

```typescript
import {
  COMPANY_NAME,
  CONTACT_EMAIL,
  WHATSAPP_NUMBER,
  getSocialLinks,
} from '../lib/constants';

// Usar en componentes
<h1>{COMPANY_NAME}</h1>
<a href={`mailto:${CONTACT_EMAIL}`}>Email</a>
```

## 📝 Archivos que Usan Variables de Entorno

### Layout Principal
- `src/layouts/Layout.astro`: Meta tags, Schema.org, URLs

### Componentes
- `src/components/Footer.astro`: Información de contacto y redes sociales
- `src/components/WhatsAppButton.astro`: Número de WhatsApp
- `src/components/Header.astro`: Nombre de la empresa

### Configuración
- `astro.config.mjs`: URL del sitio para sitemap
- `src/lib/constants.ts`: Exporta todas las constantes con fallbacks

## 🎯 Variables Importantes para Producción

Antes de hacer deploy, **asegúrate de actualizar**:

1. ✅ `PUBLIC_SITE_URL` - Tu dominio real
2. ✅ `PUBLIC_CONTACT_EMAIL` - Email de contacto real
3. ✅ `PUBLIC_WHATSAPP_NUMBER` - Tu número de WhatsApp
4. ✅ `PUBLIC_PHONE_DISPLAY` - Número formateado para mostrar
5. ✅ URLs de redes sociales (Facebook, Twitter, LinkedIn, Instagram)
6. ✅ Información del negocio (ciudad, estado, país)

## 🔐 Seguridad

- ❌ **NUNCA** commitees el archivo `.env` al repositorio
- ✅ El archivo `.env` ya está en `.gitignore`
- ✅ Usa `.env.example` como plantilla
- ✅ Variables que empiezan con `PUBLIC_` son accesibles en el cliente
- ✅ Variables sin `PUBLIC_` son solo del servidor

## 📦 Deploy a Producción

### Vercel
1. Ve a Settings → Environment Variables
2. Copia todas las variables de `.env`
3. Redeploy

### Netlify
1. Ve a Site Settings → Build & deploy → Environment
2. Agrega cada variable
3. Redeploy

### Otros Servicios
Consulta la documentación de tu servicio de hosting sobre cómo configurar variables de entorno.

## 🛠️ Troubleshooting

### Las variables no se actualizan
- Reinicia el servidor de desarrollo
- Verifica que el nombre de la variable sea correcto
- Asegúrate de que el archivo `.env` esté en la raíz del proyecto

### Variables undefined en producción
- Verifica que las hayas configurado en tu servicio de hosting
- Asegúrate de que empiecen con `PUBLIC_` si necesitas acceso en el cliente

### WhatsApp no funciona
- Verifica el formato: solo números, sin `+` ni espacios
- Ejemplo correcto: `1234567890`
- Ejemplo incorrecto: `+1 (234) 567-890`

## 📚 Referencias

- [Astro Environment Variables](https://docs.astro.build/en/guides/environment-variables/)
- [Vite Environment Variables](https://vitejs.dev/guide/env-and-mode.html)

---

**Última actualización**: 2025-10-01
