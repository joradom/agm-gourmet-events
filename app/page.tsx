"use client";

import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);

  const handleNavigation = () => {
    setIsLoading(true);
  };

  return (
    <div className="relative flex h-screen w-full flex-col overflow-hidden bg-background-dark">
      {/* Background Image Layer with Overlay */}
      <div className="absolute inset-0 z-0">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              'url("https://lh3.googleusercontent.com/aida-public/AB6AXuCwFZ4zedc1tNSdBH_Ja5eK1vi7Ly3j1Q8EATwQPl63fC0xjvYQ7XCrCGJw8ESd5fGWrPBJkcCGoxoRAgf867mqg-5uf3kV_mt9EiVPz8HDSYqj8hcevzzZ6ANQoMTd44qVuYhkJIK4hu4vyL5GYDqGh8QJG-tLldSzhdTXsfhbBw72C-Nk1jsupnqQ6uXb7G7shWH28jDR_gIAfdLqMMuFaD-oiwlOY_W41x_wQHviiMt3r_fmM1eaBM_ckgihxIVMij1z2cO47yOK")',
          }}
        />
        {/* Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-background-dark" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 pb-8 pt-12 safe-area-inset-top safe-area-inset-bottom">
        {/* Top Section: Logo/Branding */}
        <div className="flex flex-col items-center pt-8 animate-fade-in-down">
          {/* Icon/Logo Placeholder */}
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-primary/30 bg-primary/20 backdrop-blur-sm">
            <span className="material-symbols-outlined text-4xl text-primary">
              restaurant_menu
            </span>
          </div>
          {/* Headline */}
          <h1 className="text-center text-4xl font-extrabold leading-tight tracking-tight drop-shadow-md text-white">
            Ruta Gastronómica
          </h1>
        </div>

        {/* Bottom Section: Text & Actions */}
        <div className="mx-auto flex w-full max-w-md flex-col space-y-6">
          {/* Welcome Text */}
          <div className="mb-4 space-y-2 text-center">
            <h2 className="text-2xl font-bold text-white">Siente la pasión</h2>
            <p className="px-2 text-base font-normal leading-relaxed text-gray-200">
              Descubre el sabor de España. Los mejores eventos culinarios, catas de vino y rutas de tapas a tu alcance.
            </p>
          </div>

          {/* Primary Action */}
          <Link
            href="/auth/register"
            onClick={handleNavigation}
            className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-primary px-5 text-lg font-bold leading-normal tracking-wide shadow-lg shadow-orange-900/20 text-white transition-colors hover:bg-orange-600 disabled:opacity-50"
          >
            <span className="truncate">Crear cuenta</span>
          </Link>

          {/* Secondary Action */}
          <Link
            href="/auth/login"
            onClick={handleNavigation}
            className="flex h-14 w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl border border-white/20 bg-white/10 px-5 text-lg font-semibold leading-normal tracking-wide backdrop-blur-md text-white transition-colors hover:bg-white/20"
          >
            <span className="truncate">Ya tengo cuenta</span>
          </Link>

          {/* Divider / Alternative Login */}
          <div className="flex items-center py-1">
            <div className="flex-grow border-t border-white/20" />
            <span className="mx-4 flex-shrink-0 text-sm text-white/60">
              O continúa con
            </span>
            <div className="flex-grow border-t border-white/20" />
          </div>

          {/* Social Icons Row */}
          <div className="flex justify-center gap-6">
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
              <img
                alt="Google"
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBlWKxAqPRO-eegjzLFnn5xOns8sLU5SroqzUM-3jV3uQdweM1R4LcsaD5XihFZRSoO8fs77-TQklKC5buvGrvgxnkaaMMd_5rgv602g-cJKn-Ursk9DUo6qtIWxmD8KyguMjA_pHbQ6z5_KPLjHEkfJ_saQG8EK1GU-fEZaLHORO4k9CMgHIr92dO7n2Rk6dCVJfr-gSoDTCSwS7iYyyUI3fTHZQb6fU_w-vdgWfIsABCgjirlQYvpIVnFxMNTajXr9upRi5cz1Rbl"
              />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
              <img
                alt="Apple"
                className="h-6 w-6 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuU5E-Ti5hUEmsl-tr35yKwISBm_5zTmIPbKjDJvXuEo7hCm5zxEnOYoLXb9NDe771HCnxIp-6YJTXt5h4f-oYFO5USBQwU-erN934XOD8VftmV5va85QF6JurlnIJJLFliw60wJrvfH2wfnt6dGRvOt5gltwm78k2kxF5z-3SrOU_JmbFkMxgpy4WfkbUKWKX_ggj6TrpPO4dieanryGNQ1eTOhZQhbQN17UoUAazpTx8BHEPQQ-wep9PmbOUStDC9ectBkKCGU7A"
              />
            </button>
            <button className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 backdrop-blur-sm transition-all hover:bg-white/20">
              <img
                alt="Facebook"
                className="h-6 w-6"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCd9Al1nQNIcN3Z2pHSwulrJqUD3-xRuXdax2cg9EE0v_yACVh4WXlLXsHJj-DGBKMdCreOQLOd7MXI5wJDsH52RR743cbdxbSTiONElGzTY-WID_j9hOeFCi8gWg9jvZT05DB3q7SLtASmlV-uYjTMAgn2CJpYyo4s0yFWnd9f5970bjXzAt27IpbYNUGWyw-ULFSQsISUIuUW1DCjYu_PW0UVIdkhdSPcTsYwrWvWUUBuRU141ydeXVoxI7eD__5sj8DrKV1F5x2v"
              />
            </button>
          </div>

          {/* Footer Link */}
          <div className="pt-2 text-center">
            <Link
              href="/eventos"
              className="text-sm font-medium text-white/70 decoration-transparent transition-colors hover:text-white hover:decoration-white/70 underline"
            >
              Continuar como invitado
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
