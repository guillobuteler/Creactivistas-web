export const questions = [
  [
    { id: '1a', label: 'Tomar decisiones después de conocer qué piensan los demás' },
    { id: '1b', label: 'Tomar decisiones sin consultar a otros' },
  ],
  [
    { id: '2a', label: 'Ser identificado como imaginativo o intuitivo' },
    { id: '2b', label: 'Ser identificado como concreto y preciso' },
  ],
  [
    { id: '3a', label: 'Tomar decisiones sobre las personas basándome en datos disponibles y un análisis sistemático de las situaciones' },
    { id: '3b', label: 'Tomar decisiones sobre las personas basándome en la empatía, emociones y entendimiento de sus necesidades y valores' },
  ],
  [
    { id: '4a', label: 'Permitir que los compromisos ocurran sólo si los otros quieren asumirlos' },
    { id: '4b', label: 'Presionar para asegurarme de que los compromisos sean cumplidos' },
  ],
  [
    { id: '5a', label: 'Tener tiempo para reflexionar y estar tranquilo y en silencio solo' },
    { id: '5b', label: 'Tener tiempo para estar activo y enérgico con otros' },
  ],
  [
    { id: '6a', label: 'Usar métodos que conozco bien y son efectivos para cumplir con mi trabajo' },
    { id: '6b', label: 'Pensar en nuevos métodos para hacer las tareas' },
  ],
  [
    { id: '7a', label: 'Llegar a conclusiones basándome en un análisis lógico, racional y metódico' },
    { id: '7b', label: 'Llegar a conclusiones basándome en lo que siento y creo desde la experiencia acerca de la vida y las personas' },
  ],
  [
    { id: '8a', label: 'Evitar comprometerme con fechas límite (deadlines)' },
    { id: '8b', label: 'Armar un esquema de trabajo y seguirlo' },
  ],
  [
    { id: '9a', label: 'Los pensamientos y emociones que otros no pueden ver' },
    { id: '9b', label: 'Actividades y ocurrencias en las cuales otros participan' },
  ],
  [
    { id: '10a', label: 'Lo abstracto y teórico' },
    { id: '10b', label: 'Lo concreto y real' },
  ],
  [
    { id: '11a', label: 'Ayudar a otros a explorar sus emociones' },
    { id: '11b', label: 'Ayudar a otros a tomar decisiones lógicas' },
  ],
  [
    { id: '12a', label: 'Comunicar muy poco de mis pensamientos y emociones' },
    { id: '12b', label: 'Comunicar libremente mis pensamientos y emociones' },
  ],
  [
    { id: '13a', label: 'Planificar de antemano basándome en proyecciones' },
    { id: '13b', label: 'Planificar a medida que aparecen las necesidades' },
  ],
  [
    { id: '14a', label: 'Conocer gente nueva' },
    { id: '14b', label: 'Estar solo o con una persona a quien conozco bien' },
  ],
  [
    { id: '15a', label: 'El mundo de las ideas' },
    { id: '15b', label: 'El mundo de las hechos comprobables' },
  ],
  [
    { id: '16a', label: 'Las convicciones' },
    { id: '16b', label: 'Conclusiones verificables' },
  ],
  [
    { id: '17a', label: 'Llevar registro de mis compromisos y citas en agendas lo más que pueda' },
    { id: '17b', label: 'Evitar registrar mis compromisos y citas en agendas lo más que pueda' },
  ],
  [
    { id: '18a', label: 'Llevar a la práctica planes cuidadosa y detalladamente precisos' },
    { id: '18b', label: 'Diseñar planes y estructuras sin necesariamente llevarlos a la práctica' },
  ],
  [
    { id: '19a', label: 'Sentirme libre de hacer las cosas según se presenten' },
    { id: '19b', label: 'Saber anticipadamente qué es lo que tengo que hacer' },
  ],
  [
    { id: '20a', label: 'Experimentar situaciones, discusiones o películas con alto contenido emocional' },
    { id: '20b', label: 'Usar mi habilidad para analizar situaciones' },
  ],
];

export const answersInit = {
  '1a': 0,
  '1b': 0,
  '2a': 0,
  '2b': 0,
  '3a': 0,
  '3b': 0,
  '4a': 0,
  '4b': 0,
  '5a': 0,
  '5b': 0,
  '6a': 0,
  '6b': 0,
  '7a': 0,
  '7b': 0,
  '8a': 0,
  '8b': 0,
  '9a': 0,
  '9b': 0,
  '10a': 0,
  '10b': 0,
  '11a': 0,
  '11b': 0,
  '12a': 0,
  '12b': 0,
  '13a': 0,
  '13b': 0,
  '14a': 0,
  '14b': 0,
  '15a': 0,
  '15b': 0,
  '16a': 0,
  '16b': 0,
  '17a': 0,
  '17b': 0,
  '18a': 0,
  '18b': 0,
  '19a': 0,
  '19b': 0,
  '20a': 0,
  '20b': 0,
};

export const marks = [
  { value: 0, label: '0' },
  { value: 1, label: '1' },
  { value: 2, label: '2' },
  { value: 3, label: '3' },
  { value: 4, label: '4' },
  { value: 5, label: '5' },
];

export const scalesMap = [
  {
    title: 'La escala IE: I de Introversion',
    question: '¿Dónde preferís enfocar tu atención?',
    axisMap: [
      {
        char: 'I',
        title: 'Resultados de Introversion',
        keys: ['1b', '5a', '9a', '12a', '14b'],
      },
      {
        char: 'E',
        title: 'Resultados de Extroversion',
        keys: ['1a', '5b', '9b', '12b', '14a'],
      },
    ]
  },
  {
    title: 'La escala NS: S de Sensing',
    question: '¿Cómo procesas información y te enteras de cosas?',
    axisMap: [
      {
        char: 'N',
        title: 'Resultados de iNtuition',
        keys: ['2a', '6b', '10a', '15a', '18b'],
      },
      {
        char: 'S',
        title: 'Resultados de Sensing',
        keys: ['2b', '6a', '10b', '15b', '18a'],
      },
    ]
  },
  {
    title: 'La escala TF: F de Feeling',
    question: '¿Cómo tomas decisiones?',
    axisMap: [
      {
        char: 'T',
        title: 'Resultados de Thinking',
        keys: ['3a', '7a', '11b', '16b', '20b'],
      },
      {
        char: 'F',
        title: 'Resultados de Feeling',
        keys: ['3b', '7b', '11a', '16a', '20a'],
      },
    ]
  },
  {
    title: 'La escala PJ: J de Judging',
    question: '¿Cómo te orientas en relación al mundo exterior?',
    axisMap: [
      {
        char: 'P',
        title: 'Resultados de Perceiving',
        keys: ['4a', '8a', '13b', '17b', '19a'],
      },
      {
        char: 'J',
        title: 'Resultados de Judging',
        keys: ['4b', '8b', '13a', '17a', '19b'],
      },
    ]
  },
];

export const totalsInit = {
  i: 0,
  e: 0,
  n: 0,
  s: 0,
  t: 0,
  f: 0,
  p: 0,
  j: 0,
};