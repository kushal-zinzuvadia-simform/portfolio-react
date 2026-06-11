import { useState } from 'react';

import type { FormData, FormErrors } from '../types/Form';
import { INITIAL_FORM_DATA } from '../data/formData';
import { validateField } from '../utils/validation';

export const useContactForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<FormErrors>({});

  const validate = () => {
    const newErrors: FormErrors = {};

    (Object.keys(formData) as Array<keyof FormData>).forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const field = name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    const error = validateField(field, value);

    setErrors((prev) => ({
      ...prev,
      [name]: error || undefined,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validate()) return;

    console.log('Contact Form Data:', formData);

    alert('Thank you for reaching out! I will get back to you soon.');

    setFormData(INITIAL_FORM_DATA);

    setErrors({});
  };

  return {
    formData,
    errors,
    handleChange,
    handleSubmit,
  };
};
