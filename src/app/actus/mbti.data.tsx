import { AxesDetails as AxesDetailsType, QuestionsGroup, mbtiScale } from "./mbti.types";

export const AxesDetails: AxesDetailsType = {
  I: {
    title: "Resultados de Introversion",
    questionKeys: ["1b", "5a", "9a", "12a", "14b"],
  },
  E: {
    title: "Resultados de Extroversion",
    questionKeys: ["1a", "5b", "9b", "12b", "14a"],
  },
  N: {
    title: "Resultados de iNtuition",
    questionKeys: ["2a", "6b", "10a", "15a", "18b"],
  },
  S: {
    title: "Resultados de Sensing",
    questionKeys: ["2b", "6a", "10b", "15b", "18a"],
  },
  T: {
    title: "Resultados de Thinking",
    questionKeys: ["3a", "7a", "11b", "16b", "20b"],
  },
  F: {
    title: "Resultados de Feeling",
    questionKeys: ["3b", "7b", "11a", "16a", "20a"],
  },
  P: {
    title: "Resultados de Perceiving",
    questionKeys: ["4a", "8a", "13b", "17b", "19a"],
  },
  J: {
    title: "Resultados de Judging",
    questionKeys: ["4b", "8b", "13a", "17a", "19b"],
  },
};

export const mbtiScales: mbtiScale[] = [
  {
    title: "La escala IE",
    question: "¿Dónde preferís enfocar tu atención?",
    axes: ["I", "E"],
  },
  {
    title: "La escala NS",
    question: "¿Cómo procesas información y te enteras de cosas?",
    axes: ["N", "S"],
  },
  {
    title: "La escala TF",
    question: "¿Cómo tomas decisiones?",
    axes: ["T", "F"],
  },
  {
    title: "La escala PJ",
    question: "¿Cómo te orientas en relación al mundo exterior?",
    axes: ["P", "J"],
  },
];

export const QuestionsMatrix: QuestionsGroup[] = [
  [
    {
      key: "1a",
      label: "Tomar decisiones después de conocer qué piensan los demás",
    },
    { key: "1b", label: "Tomar decisiones sin consultar a otros" },
  ],
  [
    { key: "2a", label: "Ser identificado como imaginativo o intuitivo" },
    { key: "2b", label: "Ser identificado como concreto y preciso" },
  ],
  [
    {
      key: "3a",
      label:
        "Tomar decisiones sobre las personas basándome en datos disponibles y un análisis sistemático de las situaciones",
    },
    {
      key: "3b",
      label:
        "Tomar decisiones sobre las personas basándome en la empatía, emociones y entendimiento de sus necesidades y valores",
    },
  ],
  [
    {
      key: "4a",
      label:
        "Permitir que los compromisos ocurran sólo si los otros quieren asumirlos",
    },
    {
      key: "4b",
      label: "Presionar para asegurarme de que los compromisos sean cumplidos",
    },
  ],
  [
    {
      key: "5a",
      label:
        "Tener tiempo para reflexionar y estar tranquilo y en silencio solo",
    },
    { key: "5b", label: "Tener tiempo para estar activo y enérgico con otros" },
  ],
  [
    {
      key: "6a",
      label:
        "Usar métodos que conozco bien y son efectivos para cumplir con mi trabajo",
    },
    { key: "6b", label: "Pensar en nuevos métodos para hacer las tareas" },
  ],
  [
    {
      key: "7a",
      label:
        "Llegar a conclusiones basándome en un análisis lógico, racional y metódico",
    },
    {
      key: "7b",
      label:
        "Llegar a conclusiones basándome en lo que siento y creo desde la experiencia acerca de la vida y las personas",
    },
  ],
  [
    { key: "8a", label: "Evitar comprometerme con fechas límite (deadlines)" },
    { key: "8b", label: "Armar un esquema de trabajo y seguirlo" },
  ],
  [
    {
      key: "9a",
      label: "Los pensamientos y emociones que otros no pueden ver",
    },
    {
      key: "9b",
      label: "Actividades y ocurrencias en las cuales otros participan",
    },
  ],
  [
    { key: "10a", label: "Lo abstracto y teórico" },
    { key: "10b", label: "Lo concreto y real" },
  ],
  [
    { key: "11a", label: "Ayudar a otros a explorar sus emociones" },
    { key: "11b", label: "Ayudar a otros a tomar decisiones lógicas" },
  ],
  [
    { key: "12a", label: "Comunicar muy poco de mis pensamientos y emociones" },
    { key: "12b", label: "Comunicar libremente mis pensamientos y emociones" },
  ],
  [
    { key: "13a", label: "Planificar de antemano basándome en proyecciones" },
    { key: "13b", label: "Planificar a medida que aparecen las necesidades" },
  ],
  [
    { key: "14a", label: "Conocer gente nueva" },
    { key: "14b", label: "Estar solo o con una persona a quien conozco bien" },
  ],
  [
    { key: "15a", label: "El mundo de las ideas" },
    { key: "15b", label: "El mundo de las hechos comprobables" },
  ],
  [
    { key: "16a", label: "Las convicciones" },
    { key: "16b", label: "Conclusiones verificables" },
  ],
  [
    {
      key: "17a",
      label:
        "Llevar registro de mis compromisos y citas en agendas lo más que pueda",
    },
    {
      key: "17b",
      label:
        "Evitar registrar mis compromisos y citas en agendas lo más que pueda",
    },
  ],
  [
    {
      key: "18a",
      label: "Llevar a la práctica planes cuidadosa y detalladamente precisos",
    },
    {
      key: "18b",
      label:
        "Diseñar planes y estructuras sin necesariamente llevarlos a la práctica",
    },
  ],
  [
    {
      key: "19a",
      label: "Sentirme libre de hacer las cosas según se presenten",
    },
    {
      key: "19b",
      label: "Saber anticipadamente qué es lo que tengo que hacer",
    },
  ],
  [
    {
      key: "20a",
      label:
        "Experimentar situaciones, discusiones o películas con alto contenido emocional",
    },
    { key: "20b", label: "Usar mi habilidad para analizar situaciones" },
  ],
];

// export const QuestionsArray: Question[] = [
//   {
//     key: "1a",
//     label: "Tomar decisiones después de conocer qué piensan los demás",
//     score: 0,
//   },
//   { key: "1b", label: "Tomar decisiones sin consultar a otros", score: 0 },
//   {
//     key: "2a",
//     label: "Ser identificado como imaginativo o intuitivo",
//     score: 0,
//   },
//   { key: "2b", label: "Ser identificado como concreto y preciso", score: 0 },
//   {
//     key: "3a",
//     label:
//       "Tomar decisiones sobre las personas basándome en datos disponibles y un análisis sistemático de las situaciones",
//     score: 0,
//   },
//   {
//     key: "3b",
//     label:
//       "Tomar decisiones sobre las personas basándome en la empatía, emociones y entendimiento de sus necesidades y valores",
//     score: 0,
//   },

//   {
//     key: "4a",
//     label:
//       "Permitir que los compromisos ocurran sólo si los otros quieren asumirlos",
//     score: 0,
//   },
//   {
//     key: "4b",
//     label: "Presionar para asegurarme de que los compromisos sean cumplidos",
//     score: 0,
//   },
//   {
//     key: "5a",
//     label: "Tener tiempo para reflexionar y estar tranquilo y en silencio solo",
//     score: 0,
//   },
//   {
//     key: "5b",
//     label: "Tener tiempo para estar activo y enérgico con otros",
//     score: 0,
//   },

//   {
//     key: "6a",
//     label:
//       "Usar métodos que conozco bien y son efectivos para cumplir con mi trabajo",
//     score: 0,
//   },
//   {
//     key: "6b",
//     label: "Pensar en nuevos métodos para hacer las tareas",
//     score: 0,
//   },
//   {
//     key: "7a",
//     label:
//       "Llegar a conclusiones basándome en un análisis lógico, racional y metódico",
//     score: 0,
//   },
//   {
//     key: "7b",
//     label:
//       "Llegar a conclusiones basándome en lo que siento y creo desde la experiencia acerca de la vida y las personas",
//     score: 0,
//   },
//   {
//     key: "8a",
//     label: "Evitar comprometerme con fechas límite (deadlines)",
//     score: 0,
//   },
//   { key: "8b", label: "Armar un esquema de trabajo y seguirlo", score: 0 },
//   {
//     key: "9a",
//     label: "Los pensamientos y emociones que otros no pueden ver",
//     score: 0,
//   },
//   {
//     key: "9b",
//     label: "Actividades y ocurrencias en las cuales otros participan",
//     score: 0,
//   },
//   { key: "10a", label: "Lo abstracto y teórico", score: 0 },
//   { key: "10b", label: "Lo concreto y real", score: 0 },
//   { key: "11a", label: "Ayudar a otros a explorar sus emociones", score: 0 },
//   {
//     key: "11b",
//     label: "Ayudar a otros a tomar decisiones lógicas",
//     score: 0,
//   },
//   {
//     key: "12a",
//     label: "Comunicar muy poco de mis pensamientos y emociones",
//     score: 0,
//   },
//   {
//     key: "12b",
//     label: "Comunicar libremente mis pensamientos y emociones",
//     score: 0,
//   },
//   {
//     key: "13a",
//     label: "Planificar de antemano basándome en proyecciones",
//     score: 0,
//   },
//   {
//     key: "13b",
//     label: "Planificar a medida que aparecen las necesidades",
//     score: 0,
//   },
//   { key: "14a", label: "Conocer gente nueva", score: 0 },
//   {
//     key: "14b",
//     label: "Estar solo o con una persona a quien conozco bien",
//     score: 0,
//   },
//   { key: "15a", label: "El mundo de las ideas", score: 0 },
//   { key: "15b", label: "El mundo de las hechos comprobables", score: 0 },
//   { key: "16a", label: "Las convicciones", score: 0 },
//   { key: "16b", label: "Conclusiones verificables", score: 0 },
//   {
//     key: "17a",
//     label:
//       "Llevar registro de mis compromisos y citas en agendas lo más que pueda",
//     score: 0,
//   },
//   {
//     key: "17b",
//     label:
//       "Evitar registrar mis compromisos y citas en agendas lo más que pueda",
//     score: 0,
//   },
//   {
//     key: "18a",
//     label: "Llevar a la práctica planes cuidadosa y detalladamente precisos",
//     score: 0,
//   },
//   {
//     key: "18b",
//     label:
//       "Diseñar planes y estructuras sin necesariamente llevarlos a la práctica",
//     score: 0,
//   },
//   {
//     key: "19a",
//     label: "Sentirme libre de hacer las cosas según se presenten",
//     score: 0,
//   },
//   {
//     key: "19b",
//     label: "Saber anticipadamente qué es lo que tengo que hacer",
//     score: 0,
//   },
//   {
//     key: "20a",
//     label:
//       "Experimentar situaciones, discusiones o películas con alto contenido emocional",
//     score: 0,
//   },
//   {
//     key: "20b",
//     label: "Usar mi habilidad para analizar situaciones",
//     score: 0,
//   },
// ];

export const testSampleAnswers = {
  "1a": 1,
  "1b": 3,
  "2a": 1,
  "2b": 2,
  "3a": 3,
  "3b": 5,
  "4a": 5,
  "4b": 2,
  "5a": 1,
  "5b": 5,
  "6a": 4,
  "6b": 3,
  "7a": 5,
  "7b": 2,
  "8a": 0,
  "8b": 2,
  "9a": 5,
  "9b": 4,
  "10a": 5,
  "10b": 0,
  "11a": 2,
  "11b": 0,
  "12a": 1,
  "12b": 5,
  "13a": 5,
  "13b": 1,
  "14a": 5,
  "14b": 5,
  "15a": 4,
  "15b": 2,
  "16a": 5,
  "16b": 3,
  "17a": 1,
  "17b": 1,
  "18a": 1,
  "18b": 1,
  "19a": 3,
  "19b": 0,
  "20a": 2,
  "20b": 5,
};
