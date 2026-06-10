import { useState } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

type FormData = {
  name: string;
  email: string;
  contactNo: string;
  message: string;
};

export const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    contactNo: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validateField = (name: keyof FormData, value: string) => {
    switch (name) {
      case 'name':
        return value.trim() ? '' : 'Name is required';

      case 'email':
        if (!value.trim()) return 'Email is required';

        return /^[A-Z0-9._%+-]+@[A-Z0-9]([A-Z0-9-]*[A-Z0-9])?(\.[A-Z0-9]([A-Z0-9-]*[A-Z0-9])?)*\.[A-Z]{2,}$/i.test(
          value
        )
          ? ''
          : 'Enter a valid email';

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

  const validate = () => {
    const newErrors: Partial<FormData> = {};

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

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    const error = validateField(name as keyof FormData, value);

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

    setFormData({
      name: '',
      email: '',
      contactNo: '',
      message: '',
    });

    setErrors({});
  };

  return (
    <section
      id="contact"
      className="scroll-mt-24 min-h-screen px-4 pt-16 text-white sm:px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl sm:text-5xl font-light">
            Get In <span className="text-purple-500">Touch</span>
          </h2>

          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Have a project in mind, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-medium mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5" noValidate>
              <div>
                <input
                  type="text"
                  name="name"
                  title="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500"
                />

                {errors.name && (
                  <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                )}
              </div>

              <div>
                <input
                  type="email"
                  name="email"
                  title="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500"
                />

                {errors.email && (
                  <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                )}
              </div>

              <div>
                <input
                  type="number"
                  name="contactNo"
                  title="contactNo"
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  maxLength={10}
                  onChange={handleChange}
                  onKeyDown={(e) => {
                    if (['e', 'E', '+', '-'].includes(e.key)) {
                      e.preventDefault();
                    }
                  }}
                  className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500"
                />

                {errors.contactNo && (
                  <p className="mt-1 text-sm text-red-400">
                    {errors.contactNo}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  name="message"
                  title="message"
                  rows={5}
                  maxLength={200}
                  placeholder="How can I help?"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 outline-none focus:border-purple-500"
                />

                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-lg bg-purple-600 px-6 py-3 font-medium transition hover:bg-purple-700"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-medium mb-4">Connect with Me</h3>

            <p className="text-gray-400 mb-8 max-w-md">
              You can also find me on these platforms. Feel free to connect,
              collaborate, or follow my work.
            </p>

            <div className="space-y-4">
              <a
                href="https://github.com/kushal-zinzuvadia-simform"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-purple-500"
              >
                <FaGithub size={24} />
                <span>GitHub/kushal-zinzuvadia-simform</span>
              </a>

              <a
                href="https://in.linkedin.com/in/kushal-zinzuvadia"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4 transition hover:border-purple-500"
              >
                <FaLinkedin size={24} />
                <span>LinkedIn/kushal-zinzuvadia</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
