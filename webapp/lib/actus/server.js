// auxiliary file for use in the node server

const mapaEscalas = [
  {
    title: 'La escala IE',
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
    title: 'La escala NS',
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
    title: 'La escala TF',
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
    title: 'La escala PJ',
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
]

function calcularMBTI(totals) {
  // console.log(totals)
  let mbti = (totals.I > totals.E) ? 'I' : 'E';
  mbti += (totals.N > totals.S) ? 'N' : 'S';
  mbti += (totals.T > totals.F) ? 'T' : 'F';
  mbti += (totals.P > totals.J) ? 'P' : 'J';
  // console.log(mbti)
  return mbti;
}

function hidratarTemplateActus(template, resultados) {
  let H2Oed = template
  const { I, E, N, S, T, F, P, J } = resultados
  const totals = { I: I.total, E: E.total, N: N.total, S: S.total, T: T.total, F: F.total, P: P.total, J: J.total }
  const tipo = calcularMBTI(totals)
  const link = `actus/resultados/${I.total},${E.total},${N.total},${S.total},${T.total},${F.total},${P.total},${J.total}`
  // hidratacion
  H2Oed = H2Oed.replace(`$__MBTI__`, tipo)
  for (const [key, value] of Object.entries(resultados)) {
    H2Oed = H2Oed.replace(`$__TOTAL_${key}__`, value.total)
    for (const [indexPregunta, respuesta] of Object.entries(value.parciales)) {
      H2Oed = H2Oed.replace(`$__PARCIAL_${key}_${indexPregunta}__`, respuesta)
    }
  }
  H2Oed = H2Oed.replace(`$__LINK__`, link)
  console.log(H2Oed)
  return H2Oed
}

module.exports.hidratarTemplateActus = hidratarTemplateActus
