import { useState } from 'react';

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

  const validate = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9]([A-Z0-9-]*[A-Z0-9])?(\.[A-Z0-9]([A-Z0-9-]*[A-Z0-9])?)*\.[A-Z]{2,}$/i.test(
        formData.email
      )
    ) {
      newErrors.email = 'Enter a valid email';
    }

    if (!formData.contactNo.trim()) {
      newErrors.contactNo = 'Contact number is required';
    } else if (!/^\d{10}$/.test(formData.contactNo)) {
      newErrors.contactNo = 'Contact number must be exactly 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'I would love to hear from you.';
    }

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
      className="scroll-mt-24 min-h-screen px-4 py-8 text-white sm:px-6"
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
                  type="tel"
                  name="contactNo"
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  maxLength={10}
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
                  rows={5}
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
        </div>
      </div>
    </section>
  );
};
