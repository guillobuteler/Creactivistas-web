import Card from "@/components/card";

export default function ActusDescription() {
  return (
      <section data-testid="description">
        <Card title="Test de personalidad basado en MBTI">
          <p className="block font-normal text-inherit antialiased leading-snug">
            Este es un test de personalidad gratuito que se deriva del Myers
            Briggs Type Indicator (MBTI) y busca describir, con pocas variables,
            las preferencias de una persona.
          </p>
          <p className="block font-normal text-inherit antialiased leading-snug">
            Como todo test autoadministrable, refleja lo que un individuo cree
            de sí mismo y esa información es muy valiosa a la hora de empezar un
            camino de desarrollo personal o profesional.
          </p>
          <p className="block font-normal text-inherit antialiased leading-snug">
            La mayoría de los test online son pagos o agrupan los tipos
            psicológicos en “blanco y negro” sin discriminar cuáles son las
            proporciones de variables que hacen que cada persona sea una
            combinación única. Actus te dice cuánto tenés de cada cosa.
          </p>
          <p className="block font-normal text-inherit antialiased leading-snug">
            Sin respuesta correcta o incorrecta, cada preferencia es perfecta
            para distintos tipos de tareas, profesiones, rubros, equipos y hasta
            etapas de la vida.
          </p>
          <p className="block font-normal text-inherit antialiased leading-snug">Enjoy.</p>
        </Card>
      </section>
  );
}
