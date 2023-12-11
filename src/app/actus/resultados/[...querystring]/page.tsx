"use client";

import { useParams } from "next/navigation";

// import AllAxisRadar from "./all.axis.radar";
import ActusAxisRadar from "./actus.axis.radar";
import { calculateMBTIFromTotals } from "../../actus.context";
import Card from "@/components/card";
import AllAxisBar from "./all.axis.bar";

export default function ChartedResults() {
  const { querystring } = useParams();
  const axisTotals = querystring[0]?.split("%2C");
  if (axisTotals.length < 8) {
    return (
      <h3>
        Los resultados almacenados estan incompletos o corruptos. Intente de
        nuevo o contactenos a{" "}
        <a
          href="mailto:contacto@actus.com.ar"
          className="text-creactivistas-green-light2 underline"
        >
          contacto@actus.com.ar
        </a>
      </h3>
    );
  }
  const [I, E, N, S, T, F, P, J] = axisTotals;

  return (
    <section className="flex flex-col justify-center place-items-center pb-8">
      <h1 className="mt-5 font-serif text-4xl tracking-widest">
        {calculateMBTIFromTotals(axisTotals)}
      </h1>
      <ActusAxisRadar totals={[N, S, T, F]} />
      {/* <AllAxisRadar totals={axisTotals} /> */}
      <AllAxisBar totals={axisTotals} />
      <Card>
        <p>
          Muchas gracias por confiar en nosotros, si te interesa recibir un
          feedback personalizado acerca de tu perfil de personalidad o solicitar
          el armado de tu gráfico de los 4 elementos por favor escribinos a{" "}
          <a
            href="mailto:contacto@actus.com.ar"
            className="text-creactivistas-green-light2 underline"
          >
            contacto@actus.com.ar
          </a>{" "}
          para coordinar una entrevista.
        </p>
      </Card>
    </section>
  );
}
