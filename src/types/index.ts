export interface Service {
  id: string;
  titleKey: string;
  descriptionKey: string;
  icon: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
}
