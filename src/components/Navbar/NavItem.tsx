export const NavItem = ({ label }) => {
  return (
    <button className="px-4 py-2 rounded-xl font-medium text-amber-900 transition-all duration-200 hover:bg-amber-100 hover:scale-105 active:scale-95">
      {label}
    </button>
  );
};
