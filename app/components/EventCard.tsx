import Image from "next/image";

interface EventCardProps {
  id: string;
  title: string;
  image: string;
  category: string;
  date: string;
  location: string;
  description?: string;
}

export default function EventCard({
  id,
  title,
  image,
  category,
  date,
  location,
  description,
}: EventCardProps) {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-primary/50 transition-all duration-300 hover:shadow-orange-glow animate-scale-up">
      {/* Image Container */}
      <div className="relative h-48 w-full overflow-hidden bg-gradient-to-br from-background-dark to-background-dark">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Category Badge */}
        <div className="absolute top-3 right-3 inline-flex items-center rounded-full bg-primary/90 px-3 py-1 backdrop-blur-sm">
          <span className="text-xs font-semibold text-white uppercase tracking-wide">
            {category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className="p-4 space-y-3">
        {/* Title */}
        <h3 className="text-lg font-bold text-white line-clamp-2 group-hover:text-primary transition-colors">
          {title}
        </h3>

        {/* Description (if provided) */}
        {description && (
          <p className="text-sm text-gray-300 line-clamp-2">
            {description}
          </p>
        )}

        {/* Metadata */}
        <div className="space-y-2 pt-2 border-t border-white/10">
          {/* Date */}
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <span className="material-symbols-outlined text-base text-primary">
              calendar_today
            </span>
            <span>{date}</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-2 text-sm text-gray-200">
            <span className="material-symbols-outlined text-base text-primary">
              location_on
            </span>
            <span className="truncate">{location}</span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full mt-4 h-10 rounded-lg bg-primary hover:bg-orange-600 text-white font-semibold text-sm transition-colors">
          Ver detalles
        </button>
      </div>
    </div>
  );
}
