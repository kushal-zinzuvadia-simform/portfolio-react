import { useContactForm } from '../../hooks/useContactForm';
import { ContactSocialLinks } from './ContactSocialLinks';

export const Contact = () => {
  const { formData, errors, handleChange, handleSubmit } = useContactForm();

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
                  maxLength={30}
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
                  type="tel"
                  name="contactNo"
                  title="contactNo"
                  placeholder="Contact Number"
                  value={formData.contactNo}
                  onChange={handleChange}
                  maxLength={10}
                  pattern="[0-9]{10}"
                  inputMode="numeric"
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
          <ContactSocialLinks />
        </div>
      </div>
    </section>
  );
};
