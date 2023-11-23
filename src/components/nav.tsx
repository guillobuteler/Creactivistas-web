"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="bg-neutral-300 p-2">
      <ul className="flex gap-4 justify-center text-xl">
        <li>
          <Link href={"/"} className={`${pathname === '/' ? 'underline underline-offset-4 decoration-1' : ''}`}>Inicio</Link>
        </li>
        <li>
          <Link href={"/actus"} className={`${pathname === '/actus' ? 'underline underline-offset-4 decoration-1' : ''}`}>Actus</Link>
        </li>
        <li>
          <Link href={"/big5"} className={`${pathname === '/big5' ? 'underline underline-offset-4 decoration-1' : ''}`}>Big 5</Link>
        </li>
      </ul>
    </nav>
  );
}
