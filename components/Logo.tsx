import Image from "next/image";

type LogoProps = {
  className?: string;
  height?: number;
};

export function Logo({ className = "", height = 28 }: LogoProps) {
  const width = Math.round(height * (220.35 / 73.6));
  return (
    <Image
      src="/brand/fylmkit-lockup-horizontal-color-on-dark.svg"
      alt="fylmkit"
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}

export function Mark({ size = 32 }: { size?: number }) {
  return (
    <Image
      src="/brand/fylmkit-mark-color-on-dark.svg"
      alt=""
      width={size}
      height={size}
      aria-hidden
    />
  );
}
