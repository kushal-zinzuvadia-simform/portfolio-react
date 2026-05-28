type NavItemProps = {
  label: string;
  className?: string;
};

export const NavItem = ({ label, className = '' }: NavItemProps) => {
  return (
    <button
      className={`px-4 py-2 rounded-xl font-bold text-white transition-all duration-200 hover:bg-[#11071F] hover:scale-105 active:scale-95 ${className}`}
    >
      {label}
    </button>
  );
};
