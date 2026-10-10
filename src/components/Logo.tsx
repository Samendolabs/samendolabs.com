export function Logo({ className }: { className?: string }) {
  return (
    <span
      className={`text-[17px] font-semibold tracking-[-0.03em] ${className ?? ""}`}
    >
      Samendo<span className="font-normal text-muted"> Labs</span>
    </span>
  );
}
