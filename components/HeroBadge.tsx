export default function HeroBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur text-white/90 text-xs font-medium px-3 py-1.5 rounded-full mb-4 border border-white/10">
      {children}
    </div>
  );
}
