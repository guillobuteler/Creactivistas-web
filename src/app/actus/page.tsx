import Card from "../../components/card";

export default function ActusTest() {
  return (
    <>
      <section data-testid="description">
        <Card title="Descripción">
          <p className="block font-normal text-inherit antialiased">
            Este es un test de personalidad gratuito que se deriva del Myers
            Briggs Type Indicator (MBTI) y busca describir, con pocas variables,
            las preferencias de una persona.
          </p>
          <p className="block font-normal text-inherit antialiased">
            Como todo test autoadministrable, refleja lo que un individuo cree
            de sí mismo y esa información es muy valiosa a la hora de empezar un
            camino de desarrollo personal o profesional.
          </p>
          <p className="block font-normal text-inherit antialiased">
            La mayoría de los test online son pagos o agrupan los tipos
            psicológicos en “blanco y negro” sin discriminar cuáles son las
            proporciones de variables que hacen que cada persona sea una
            combinación única. Actus te dice cuánto tenés de cada cosa.
          </p>
          <p className="block font-normal text-inherit antialiased">
            Sin respuesta correcta o incorrecta, cada preferencia es perfecta
            para distintos tipos de tareas, profesiones, rubros, equipos y hasta
            etapas de la vida.
          </p>
          <p className="block font-normal text-inherit antialiased">Enjoy.</p>
        </Card>
      </section>
      <section data-testid="instructions">
        <Card title="Instrucciones">
          <p className="block font-normal text-inherit antialiased">
            Para cada par de frases completá los casilleros del 0 al 5 según la
            siguiente escala:
          </p>
          <ul className="pl-10 pt-5">
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
    </>
  );
}
