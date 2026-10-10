const S_PATH =
  "M28 15 C28 11.5 24 10 20 10 C15 10 12 12.5 12 16 C12 22 28 19 28 25 C28 28.5 24.5 30 20 30 C15.5 30 12 28.5 12 25";

export function LogoMark({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 40 40"
      className={className}
      role="img"
      aria-label="Samendo Labs"
    >
      <rect width="40" height="40" rx="11" fill="var(--accent)" />
      <path
        d={S_PATH}
        fill="none"
        stroke="#ffffff"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({ className }: { className?: string }) {
  return (
    <span className={`flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className="h-7 w-7 shrink-0" />
      <span className="text-[15px] font-semibold tracking-tight">
        Samendo <span className="font-normal text-muted">Labs</span>
      </span>
    </span>
  );
}
