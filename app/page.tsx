import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <section>
        <h1>Journée mondiale du cerf-volant</h1>
        <h2>16 août</h2>
        <button>En savoir plus</button>
      </section>
    </main>
  );
}
