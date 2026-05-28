type NavItemProps = {
  label: string;
  className?: string;
};

export const NavItem = ({ label, className = '' }: NavItemProps) => {
  const handleClick = () => {
    const section = document.getElementById(label.toLowerCase());

    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`px-4 py-2 rounded-full font-bold text-white transition-all duration-200 hover:bg-white/10 hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};
