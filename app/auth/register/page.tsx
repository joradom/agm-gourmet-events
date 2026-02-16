"use client";

import Link from "next/link";

export default function RegisterPage() {
  return (
    <div className="flex h-screen items-center justify-center bg-background-dark px-4">
      <div className="w-full max-w-md rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm p-8">
        <h1 className="mb-2 text-2xl font-bold text-white">Crear cuenta</h1>
        <p className="mb-6 text-sm text-gray-400">
          Únete a la comunidad gastronómica
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Nombre completo
            </label>
            <input
              type="text"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
              placeholder="Tu nombre"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
              placeholder="tu@email.com"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-white mb-2">
              Contraseña
            </label>
            <input
              type="password"
              className="w-full rounded-lg border border-white/20 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary/20"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-primary h-11 font-semibold text-white hover:bg-orange-600 transition-colors"
          >
            Crear cuenta
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-400">
          ¿Ya tienes cuenta?{" "}
          <Link href="/auth/login" className="font-medium text-primary hover:text-orange-600">
            Inicia sesión
          </Link>
        </div>
      </div>
    </div>
  );
}
