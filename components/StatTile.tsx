export function StatTile({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="display text-[clamp(2rem,4vw,2.75rem)] font-semibold text-white">{value}</p>
      <p className="mt-1.5 text-[13.5px] leading-snug text-white/55">{label}</p>
    </div>
  );
}
