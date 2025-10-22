// Environment variables with fallbacks
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://gh360hunting.com';
export const COMPANY_NAME = import.meta.env.PUBLIC_COMPANY_NAME || 'GH360 Hunting';
export const COMPANY_TAGLINE = import.meta.env.PUBLIC_COMPANY_TAGLINE || 'Tu socio estratégico en gestión del talento';

// Contact Information
export const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || 'contact@gh360hunting.com';
export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '1234567890';
export const PHONE_DISPLAY = import.meta.env.PUBLIC_PHONE_DISPLAY || '+1 (234) 567-890';

// Social Media Links
export const FACEBOOK_URL = import.meta.env.PUBLIC_FACEBOOK_URL || 'https://facebook.com/gh360hunting';
export const TWITTER_URL = import.meta.env.PUBLIC_TWITTER_URL || 'https://twitter.com/gh360hunting';
export const LINKEDIN_URL = import.meta.env.PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/gh360hunting';
export const INSTAGRAM_URL = import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/gh360hunting';

// Business Details
export const BUSINESS_COUNTRY = import.meta.env.PUBLIC_BUSINESS_COUNTRY || 'US';
export const BUSINESS_CITY = import.meta.env.PUBLIC_BUSINESS_CITY || '';
export const BUSINESS_STATE = import.meta.env.PUBLIC_BUSINESS_STATE || '';
export const BUSINESS_ZIP = import.meta.env.PUBLIC_BUSINESS_ZIP || '';
export const BUSINESS_HOURS_OPEN = import.meta.env.PUBLIC_BUSINESS_HOURS_OPEN || '09:00';
export const BUSINESS_HOURS_CLOSE = import.meta.env.PUBLIC_BUSINESS_HOURS_CLOSE || '18:00';

// SEO Configuration
export const META_DESCRIPTION_ES = import.meta.env.PUBLIC_META_DESCRIPTION_ES ||
  'Soluciones integrales de recursos humanos: reclutamiento, selección de personal, pruebas psicométricas, estudios socioeconómicos y consultoría organizacional.';
export const META_DESCRIPTION_EN = import.meta.env.PUBLIC_META_DESCRIPTION_EN ||
  'Comprehensive human resources solutions: recruitment, personnel selection, psychometric tests, socioeconomic studies and organizational consulting.';
export const META_KEYWORDS_ES = import.meta.env.PUBLIC_META_KEYWORDS_ES ||
  'reclutamiento empresas, selección personal, pruebas psicométricas, estudios socioeconómicos, pruebas polígrafo, consultoría recursos humanos, headhunting México, reclutamiento ejecutivo';
export const META_KEYWORDS_EN = import.meta.env.PUBLIC_META_KEYWORDS_EN ||
  'corporate recruitment, personnel selection, psychometric tests, socioeconomic studies, polygraph tests, HR consulting, headhunting, executive recruitment';
export const OG_IMAGE = import.meta.env.PUBLIC_OG_IMAGE || '/og-image.jpg';

// Feature Flags
export const ENABLE_WHATSAPP = import.meta.env.PUBLIC_ENABLE_WHATSAPP === 'true';
export const ENABLE_CONTACT_FORM = import.meta.env.PUBLIC_ENABLE_CONTACT_FORM !== 'false'; // Default true
export const ENABLE_TESTIMONIALS = import.meta.env.PUBLIC_ENABLE_TESTIMONIALS !== 'false'; // Default true

// Helper function to get social links
export const getSocialLinks = () => [
  { name: 'Facebook', url: FACEBOOK_URL },
  { name: 'Twitter', url: TWITTER_URL },
  { name: 'LinkedIn', url: LINKEDIN_URL },
  { name: 'Instagram', url: INSTAGRAM_URL },
];
