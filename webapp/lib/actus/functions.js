import { mapaEscalas } from './constants'

export function calcularMBTI(totals) {
  console.log(totals)
  let mbti = (totals.I > totals.E) ? 'I' : 'E';
  mbti += (totals.N > totals.S) ? 'N' : 'S';
  mbti += (totals.T > totals.F) ? 'T' : 'F';
  mbti += (totals.P > totals.J) ? 'P' : 'J';
  console.log(mbti)
  return mbti;
}

export function procesarRespuestas(answers) {
  const resultados = {}
  let totalEje = 0
  let parcialesEje = {}
  mapaEscalas.forEach(escala => {
    escala.axisMap.forEach(eje => {
      eje.keys.forEach(key => {
        totalEje += answers[key]
        parcialesEje[key] = answers[key]
      })
      resultados[eje.char] = {
        total: totalEje,
        parciales: parcialesEje
      }
      totalEje = 0
      parcialesEje = {}
    })
  })
  return resultados
}
