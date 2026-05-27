type NavItemProps = {
    label: string;
}

export const NavItem = ({ label }: NavItemProps) => {
  return (
    <button className="px-4 py-2 rounded-xl font-medium text-white transition-all duration-200 hover:bg-[#11071F] hover:scale-105 active:scale-95">
      {label}
    </button>
  );
};
