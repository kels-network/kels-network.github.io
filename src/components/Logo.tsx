export function Logo({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      role="img"
      aria-label="KELS logo"
    >
      <rect width="48" height="48" rx="6" fill="#16224d" />
      <text
        x="8"
        y="22"
        fontFamily="Archivo, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#ffffff"
      >
        K
      </text>
      <text
        x="20"
        y="22"
        fontFamily="Archivo, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#ffffff"
      >
        L
      </text>
      <text
        x="31"
        y="22"
        fontFamily="Archivo, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#ffffff"
      >
        S
      </text>
      <text
        x="19"
        y="40"
        fontFamily="Archivo, sans-serif"
        fontSize="15"
        fontWeight="800"
        fill="#f3c64b"
      >
        E
      </text>
    </svg>
  );
}
