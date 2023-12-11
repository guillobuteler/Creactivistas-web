"use client";

import { useRouter } from "next/navigation";
import Card from "@/components/card";
import Button from "@/components/button";
import { useActusContext } from "../actus.context";
import { mbtiScales } from "../mbti.data";
import DetailsTable from "./components/details.table";
import MBTIResult from "./components/mbti.result.table";
export default function ActusResultados() {
  const router = useRouter();
  const { user, resultMBTI, totals } = useActusContext();
  return (
    <div data-testid="resultados-mbti" className="flex flex-col gap-6 pb-16">
      <Card title="Resultados">
        <p>
          Hola <span className=" font-medium text-indigo-600">{user.name}</span>
          ! Estos son tus resultados en el test Actus basado en el test de
          personalidad MBTI.
        </p>

        <p>
          Chequeá tu casilla de correos{" "}
          <span className="text-sky-600">({user.email})</span> para confirmar
          que recibiste una copia de los mismos.
        </p>
      </Card>
      <h3 className="text-lg"></h3>
      <div
        data-testid="test-form"
        className="flex flex-col gap-6 place-items-center border-solid border-cyan-400 rounded sm:p-4"
      >
        {mbtiScales.map((scale, i) => (
          <DetailsTable key={i} scale={scale} />
        ))}
        <MBTIResult result={resultMBTI} />
        <Button
          title="Ver gráficos"
          onClick={() => router.push(`/actus/resultados/${totals.join(",")}`)}
          dataTestId="see-charts"
        />
      </div>
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
    </div>
  );
}
