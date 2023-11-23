import Image from "next/image";

export default function Logo() {
  return (
    <Image
      className="m-auto"
      src="/creactivistas_logo_sm.png"
      alt="Creactivistas Logo"
      width={220}
      height={121}
      priority
    />
  );
}
