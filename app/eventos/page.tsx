"use client";

import { useEffect, useState } from "react";
import { collection, query, where, getDocs, Firestore } from "firebase/firestore";
import EventCard from "@/app/components/EventCard";
import BottomNavigation from "@/app/components/BottomNavigation";

interface Evento {
  id: string;
  titulo: string;
  imagen: string;
  categoria: string;
  fecha: string;
  ubicacion: string;
  descripcion?: string;
  evento?: string;
}

export default function EventosPage() {
  const [eventos, setEventos] = useState<Evento[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadEventos = async () => {
      try {
        // Dynamically import Firebase to avoid SSR issues
        const { db } = await import("@/lib/firebase");

        // Query Firestore for HIP 2026 eventos
        const eventosRef = collection(db, "eventos");
        const q = query(eventosRef, where("evento", "==", "HIP 2026"));
        
        const querySnapshot = await getDocs(q);
        const eventosData: Evento[] = [];

        querySnapshot.forEach((doc) => {
          eventosData.push({
            id: doc.id,
            ...doc.data(),
          } as Evento);
        });

        // Sort by date
        eventosData.sort((a, b) => new Date(a.fecha).getTime() - new Date(b.fecha).getTime());
        
        setEventos(eventosData);
      } catch (err) {
        console.error("Error loading eventos:", err);
        setError("No pudimos cargar los eventos. Intenta de nuevo más tarde.");
        // For demo purposes, show placeholder events
        setEventos([
          {
            id: "demo-1",
            titulo: "HIP 2026 - Ruta Gastronómica",
            imagen: "https://lh3.googleusercontent.com/aida-public/AB6AXuCwFZ4zedc1tNSdBH_Ja5eK1vi7Ly3j1Q8EATwQPl63fC0xjvYQ7XCrCGJw8ESd5fGWrPBJkcCGoxoRAgf867mqg-5uf3kV_mt9EiVPz8HDSYqj8hcevzzZ6ANQoMTd44qVuYhkJIK4hu4vyL5GYDqGh8QJG-tLldSzhdTXsfhbBw72C-Nk1jsupnqQ6uXb7G7shWH28jDR_gIAfdLqMMuFaD-oiwlOY_W41x_wQHviiMt3r_fmM1eaBM_ckgihxIVMij1z2cO47yOK",
            categoria: "Ruta",
            fecha: "15 de Marzo, 2026",
            ubicacion: "Madrid, España",
            descripcion: "Descubre los mejores sabores de España en esta exclusiva ruta gastronómica.",
            evento: "HIP 2026",
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    loadEventos();
  }, []);

  return (
    <div className="min-h-screen bg-background-dark pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 border-b border-white/10 bg-background-dark/95 backdrop-blur-lg">
        <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white">Eventos</h1>
              <p className="mt-1 text-sm text-gray-400">
                Descubre la magia de la gastronomía española
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 gap-4">
            <div className="animate-spin h-12 w-12 border-4 border-primary/30 border-t-primary rounded-full" />
            <p className="text-gray-400">Cargando eventos...</p>
          </div>
        )}

        {error && !loading && eventos.length === 0 && (
          <div className="rounded-xl border border-orange-500/20 bg-orange-500/5 p-6 text-center">
            <p className="text-gray-300">{error}</p>
          </div>
        )}

        {eventos.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2">
            {eventos.map((evento) => (
              <EventCard
                key={evento.id}
                id={evento.id}
                title={evento.titulo}
                image={evento.imagen}
                category={evento.categoria}
                date={evento.fecha}
                location={evento.ubicacion}
                description={evento.descripcion}
              />
            ))}
          </div>
        )}

        {!loading && eventos.length === 0 && !error && (
          <div className="flex flex-col items-center justify-center py-12">
            <span className="material-symbols-outlined text-6xl text-gray-600 mb-4">
              event_busy
            </span>
            <p className="text-gray-400">No hay eventos disponibles en este momento.</p>
          </div>
        )}
      </div>

      {/* Bottom Navigation */}
      <BottomNavigation />
    </div>
  );
}
