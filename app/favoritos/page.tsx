"use client";

import BottomNavigation from "@/app/components/BottomNavigation";

export default function FavoritosPage() {
  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background-dark/95 backdrop-blur-lg">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
          <h1 className="text-3xl font-bold text-white">Mis Favoritos</h1>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center justify-center py-12">
          <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">
            favorite_border
          </span>
          <p className="text-gray-400">No tienes eventos favoritos aún.</p>
          <p className="text-sm text-gray-500 mt-2">
            Marca tus eventos preferidos para verlos aquí
          </p>
        </div>
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
