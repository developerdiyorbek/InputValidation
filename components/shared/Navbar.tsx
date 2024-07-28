import LanguageDropdown from "./LanguageDropdown";
import ModeToggle from "./ModeToggle";

function Navbar() {
  return (
    <header className="fixed inset-0 z-40 h-20 bg-background/70 backdrop-blur-xl border-b">
      <div className="container mx-auto flex h-full max-w-7xl items-center justify-between">
        <h1 className="font-bold text-3xl">SD</h1>
        <div className="flex items-center gap-2">
          <ModeToggle />
          <LanguageDropdown />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
