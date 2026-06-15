import { FaGithub, FaLinkedin } from 'react-icons/fa';

export const ContactSocialLinks = () => {
  return (
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
  );
};
