"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Nav() {
  const pathname = usePathname();
  const active = 'underline underline-offset-4 decoration-1';
  return (
    <nav className="bg-neutral-300 p-2">
      <ul className="flex gap-4 justify-center text-xl">
        <li>
          <Link href={"/"} className={`${pathname === '/' ? active : ''}`}>Inicio</Link>
        </li>
        <li>
          <Link href={"/actus"} className={`${pathname === '/actus' ? active : ''}`} data-test-id="nav-actus">Actus</Link>
        </li>
        <li>
          <Link href={"/big5"} className={`${pathname === '/big5' ? active : ''}`} data-test-id="nav-big5">Big 5</Link>
        </li>
      </ul>
    </nav>
  );
}
