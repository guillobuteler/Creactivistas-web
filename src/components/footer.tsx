import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex justify-end place-items-center gap-3 w-full bg-black h-20 text-white text-sm">
      <span className="tracking-wide mt-1">desarrollado por</span>
      <a href="http://www.enneagonstudios.com/" target="_blank">
        <Image
          src="/9S_footer.png"
          alt="Enneagon Studios Logo"
          className="m-auto mr-6"
          width={229}
          height={54}
          priority
        />
      </a>
    </footer>
  );
}
