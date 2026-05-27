import { NavItem } from './NavItem';

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-115 py-4 flex items-center justify-between bg-[#1A0B2E] shadow-md">
      <div className="text-2xl font-bold text-white tracking-wide">KZ</div>

      <div className="flex items-center gap-6">
        <NavItem label="Home" />
        <NavItem label="Skills" />
        <NavItem label="Projects" />
        <NavItem label="Contact" />
      </div>
    </nav>
  );
};
