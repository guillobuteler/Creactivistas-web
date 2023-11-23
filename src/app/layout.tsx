import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../components/nav";
import Logo from "../components/logo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Creactivistas: Tests de personalidad",
  description:
    "Tomá gratis un test de personalidad basado en el modelo MBTI o Big-5. Conocé tus aptitudes mejor con un perfil detallado de tus razgos de personalidad.",
  authors: [
    { name: "EnneagonStudios", url: "https://www.enneagonstudios.com/" },
    { name: "Alejandro R. Buteler", url: "https://github.com/abuteler" },
  ],
  keywords:
    "Zoom, Actus, BigFive, Big5, MBTI, razgos de personalidad, tests de personalidad, test de personalidad, tests psicometricos, test psicometrico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="font-sans flex min-h-screen flex-col gap-8 justify-start p-5 bg-white sm:w-4/5 md:w-4/5 lg:w-3/4 xl:w-3/5 m-auto">
          <header className="flex flex-col w-full">
            <Logo />
            <Nav />
          </header>
          <section
            className="flex flex-col gap-5 text-center px-6"
            data-testid="view-loader"
          >
            {children}
          </section>
        </main>
      </body>
    </html>
  );
}
