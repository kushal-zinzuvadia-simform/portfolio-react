import type { FormData } from '../types/Form';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const validateField = (name: keyof FormData, value: string): string => {
  switch (name) {
    case 'name':
      if (!value.trim()) return 'Name is required';

      if (value.length > 30) return 'Name cannot exceed 30 characters';

      return /^[A-Za-z\s]+$/.test(value)
        ? ''
        : 'Name can contain only alphabets and spaces';

    case 'email':
      if (!value.trim()) return 'Email is required';

      return EMAIL_REGEX.test(value) ? '' : 'Enter a valid email';

    case 'contactNo':
      if (!value.trim()) return 'Contact number is required';

      return /^\d{10}$/.test(value)
        ? ''
        : 'Contact number must be exactly 10 digits';

    case 'message':
      return value.trim() ? '' : 'I would love to hear from you.';

    default:
      return '';
  }
};
