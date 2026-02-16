"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: string;
}

const navItems: NavItem[] = [
  { href: "/eventos", label: "Eventos", icon: "event" },
  { href: "/favoritos", label: "Favoritos", icon: "favorite" },
  { href: "/perfil", label: "Perfil", icon: "person" },
];

export default function BottomNavigation() {
  const pathname = usePathname();

  // Don't show navigation on home page
  if (pathname === "/") {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-white/10 bg-background-dark/95 backdrop-blur-lg safe-area-inset-bottom">
      <div className="mx-auto flex max-w-md items-center justify-around sm:max-w-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex flex-1 flex-col items-center justify-center gap-1 py-3 px-2 transition-all duration-300 ${
                isActive
                  ? "text-primary"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              <span className="material-symbols-outlined text-2xl">
                {item.icon}
              </span>
              <span className="text-xs font-medium">{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
