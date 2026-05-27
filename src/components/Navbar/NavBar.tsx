import { NavItem } from './NavItem';

export const NavBar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full px-16 py-4 flex items-center justify-between bg-amber-200 shadow-md">
      <div className="text-2xl font-bold text-amber-900 tracking-wide">
        Kushal&apos;s Portfolio
      </div>

      <div className="flex items-center gap-6">
        <NavItem label="Home" />
        <NavItem label="Skills" />
        <NavItem label="Projects" />
        <NavItem label="Contact" />
      </div>
    </nav>
  );
};
