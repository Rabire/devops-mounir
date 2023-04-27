import Image from "next/image";
import Card from "@/components/Card";

export default function Home() {
  return (
    <main>
      <section className="h-screen flex items-center justify-center flex-col gap-4 relative">
        <Image
          src="/hero-bg.jpg"
          alt="bg"
          fill
          className="-z-10 object-cover"
        />
        <h1 className="text-3xl font-bold">Journée mondiale du cerf-volantt</h1>
        <h2 className="text-xl">16 août</h2>
        <a
          href="/count"
          className="bg-purple-600 text-white p-4 rounded font-medium"
        >
          En savoir plus !
        </a>
      </section>

      <section className="bg-sky-200 grid grid-cols-3 p-10 gap-6">
        <Card
          title="Rassemblement Dieppe"
          text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste. Facere consectetur adipisicing."
        />
        <Card
          title="Rassemblement Marseille"
          text="Lorem ipsum dolor sit amet elit. Facere consectetur adipisicing. Consectetur adipisicing elit."
        />
        <Card
          title="Rassemblement Berk-sur-mer"
          text="Lorem, ipsum dolor sit amet. Iste, eius minima! Iste, eius minima! consectetur adipisicing elit."
        />
      </section>
    </main>
  );
}
