"use client";

import BottomNavigation from "@/app/components/BottomNavigation";
import Link from "next/link";

export default function PerfilPage() {
  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background-dark/95 backdrop-blur-lg">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
          <h1 className="text-3xl font-bold text-white">Mi Perfil</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 space-y-6">
          {/* Profile Avatar */}
          <div className="flex flex-col items-center">
            <div className="h-20 w-20 rounded-full bg-gradient-to-br from-primary to-orange-600 flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-4xl text-white">
                person
              </span>
            </div>
            <h2 className="text-xl font-bold text-white">Usuario</h2>
            <p className="text-sm text-gray-400">usuario@email.com</p>
          </div>

          {/* Menu Items */}
          <div className="space-y-2 border-t border-white/10 pt-6">
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
              <span className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">settings</span>
                Configuración
              </span>
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
              <span className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">help</span>
                Ayuda
              </span>
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
            </button>
            <button className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-white/5 transition-colors">
              <span className="flex items-center gap-3 text-white">
                <span className="material-symbols-outlined">info</span>
                Acerca de
              </span>
              <span className="material-symbols-outlined text-gray-400">
                chevron_right
              </span>
            </button>
          </div>

          {/* Logout Button */}
          <div className="border-t border-white/10 pt-6">
            <Link
              href="/"
              className="w-full flex items-center justify-center gap-2 h-11 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 text-red-400 font-semibold transition-colors"
            >
              <span className="material-symbols-outlined">logout</span>
              Cerrar sesión
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
