import { useState } from 'react';
import { Archive, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'The Promise', href: '#features' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Archive', href: '/capsules' },
  ];

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <nav
      className="fixed left-0 right-0 top-0 z-50 border-b border-[#201b16]/10 bg-[#f7f1e8]/85 text-[#201b16] backdrop-blur-xl"
      role="navigation"
      aria-label="Main navigation"
      onKeyDown={handleKeyDown}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a
            href="/"
            className="group flex items-center gap-3 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d36] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e8]"
            aria-label="Living Heirloom - Go to homepage"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#201b16]/15 bg-[#efe4d6] transition-colors group-hover:bg-[#e5d5c3]">
              <Archive className="h-5 w-5 text-[#8a5d36]" aria-hidden="true" />
            </span>
            <span className="font-serif text-2xl font-light tracking-[-0.03em]">Living Heirloom</span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm uppercase tracking-[0.22em] text-[#6f6256] transition-colors hover:text-[#201b16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d36] focus-visible:ring-offset-4 focus-visible:ring-offset-[#f7f1e8]"
              >
                {item.name}
              </a>
            ))}
            <Button
              className="btn-archive-small"
              onClick={() => window.location.href = '/create'}
              aria-label="Create a new living heirloom"
            >
              Begin
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
              className="rounded-full text-[#201b16] focus-visible:ring-2 focus-visible:ring-[#8a5d36]"
            >
              {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {isOpen && (
          <div id="mobile-menu" className="border-t border-[#201b16]/10 py-5 md:hidden" role="menu" aria-label="Mobile navigation menu">
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="rounded-lg py-3 text-sm uppercase tracking-[0.22em] text-[#6f6256] transition-colors hover:text-[#201b16] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8a5d36]"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {item.name}
                </a>
              ))}
              <Button
                className="btn-archive w-full"
                onClick={() => {
                  setIsOpen(false);
                  window.location.href = '/create';
                }}
                role="menuitem"
                aria-label="Create a new living heirloom"
              >
                Begin with one memory
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
