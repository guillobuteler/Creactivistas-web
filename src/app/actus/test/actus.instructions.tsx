import Card from "../../../components/card";

export default function ActusInstructions() {
  return (
    <section data-testid="instructions">
      <Card title="Instrucciones">
        <p className="block font-normal text-inherit antialiased leading-snug">
          Para cada par de frases completá los casilleros del 0 al 5 según la
          siguiente escala:
        </p>
        <ul className="pl-8 md:pl-16 pt-4">
          <li>
            <span className="text-orange-600 font-medium inline-block w-8">
              0
            </span>
            <span> = no lo prefiero casi nunca</span>
          </li>
          <li>
            <span className="text-orange-600 font-medium inline-block w-8">
              1
            </span>
            <span> = pocas veces lo prefiero</span>
          </li>
          <li>
            <span className="text-orange-600 font-medium inline-block w-8">
              2-3
            </span>
            <span> = a veces prefiero uno y a veces el otro</span>
          </li>
          <li>
            <span className="text-orange-600 font-medium inline-block w-8">
              4
            </span>
            <span> = tengo una habitual preferencia</span>
          </li>
          <li>
            <span className="text-orange-600 font-medium inline-block w-8">
              5
            </span>
            <span> = lo prefiero casi siempre</span>
          </li>
        </ul>
      </Card>
    </section>
  );
}
