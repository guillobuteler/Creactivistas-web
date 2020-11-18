// auxiliary file for use in the node server

function hidratarTemplateActus(template, resultados, mbti) {
  let H2Oed = template
  const { I, E, N, S, T, F, P, J } = resultados
  const link = `actus/resultados/${I.total},${E.total},${N.total},${S.total},${T.total},${F.total},${P.total},${J.total}`
  // hidratacion
  H2Oed = H2Oed.replace(`$__MBTI__`, mbti)
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
