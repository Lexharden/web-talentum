// Environment variables with fallbacks
export const SITE_URL = import.meta.env.PUBLIC_SITE_URL || 'https://talentum.ghadvisor360.com';
export const COMPANY_NAME = import.meta.env.PUBLIC_COMPANY_NAME || 'Talentum';
export const COMPANY_TAGLINE = import.meta.env.PUBLIC_COMPANY_TAGLINE || 'Soluciones Integrales de Recursos Humanos';

// Contact Information
export const CONTACT_EMAIL = import.meta.env.PUBLIC_CONTACT_EMAIL || 'contacto@talentum.ghadvisor360.com';
export const WHATSAPP_NUMBER = import.meta.env.PUBLIC_WHATSAPP_NUMBER || '1234567890';
export const PHONE_DISPLAY = import.meta.env.PUBLIC_PHONE_DISPLAY || '+52 (55) 1234-5678';

// Social Media Links
export const FACEBOOK_URL = import.meta.env.PUBLIC_FACEBOOK_URL || 'https://facebook.com/talentumrh';
export const TWITTER_URL = import.meta.env.PUBLIC_TWITTER_URL || 'https://twitter.com/talentumrh';
export const LINKEDIN_URL = import.meta.env.PUBLIC_LINKEDIN_URL || 'https://linkedin.com/company/talentumrh';
export const INSTAGRAM_URL = import.meta.env.PUBLIC_INSTAGRAM_URL || 'https://instagram.com/talentumrh';

// Business Details
export const BUSINESS_COUNTRY = import.meta.env.PUBLIC_BUSINESS_COUNTRY || 'MX';
export const BUSINESS_CITY = import.meta.env.PUBLIC_BUSINESS_CITY || '';
export const BUSINESS_STATE = import.meta.env.PUBLIC_BUSINESS_STATE || '';
export const BUSINESS_ZIP = import.meta.env.PUBLIC_BUSINESS_ZIP || '';
export const BUSINESS_HOURS_OPEN = import.meta.env.PUBLIC_BUSINESS_HOURS_OPEN || '09:00';
export const BUSINESS_HOURS_CLOSE = import.meta.env.PUBLIC_BUSINESS_HOURS_CLOSE || '18:00';

// SEO Configuration
export const META_DESCRIPTION_ES = import.meta.env.PUBLIC_META_DESCRIPTION_ES ||
  'Talentum: Líderes en soluciones integrales de recursos humanos en México. Reclutamiento ejecutivo, evaluaciones psicométricas certificadas, estudios socioeconómicos, pruebas de polígrafo y consultoría en desarrollo organizacional. Transformamos empresas con talento excepcional.';
export const META_DESCRIPTION_EN = import.meta.env.PUBLIC_META_DESCRIPTION_EN ||
  'Talentum: Leaders in comprehensive human resources solutions in Mexico. Executive recruitment, certified psychometric assessments, socioeconomic studies, polygraph testing and organizational development consulting. We transform companies with exceptional talent.';
export const META_KEYWORDS_ES = import.meta.env.PUBLIC_META_KEYWORDS_ES ||
  'talentum recursos humanos, reclutamiento ejecutivo México, headhunting empresarial, selección de personal certificada, pruebas psicométricas profesionales, evaluaciones psicométricas, estudios socioeconómicos laborales, pruebas de polígrafo empresarial, consultoría desarrollo organizacional, gestión talento humano, soluciones RH integrales, evaluación de competencias, selección por competencias México';
export const META_KEYWORDS_EN = import.meta.env.PUBLIC_META_KEYWORDS_EN ||
  'talentum human resources, executive recruitment Mexico, corporate headhunting, certified personnel selection, professional psychometric tests, psychometric assessments, labor socioeconomic studies, corporate polygraph testing, organizational development consulting, human talent management, comprehensive HR solutions, competency assessment, competency-based selection Mexico';
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
