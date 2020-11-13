export const calcularMBTI = (totals) => {
  console.log(totals)
  let mbti = (totals.I > totals.E) ? 'I' : 'E';
  mbti += (totals.N > totals.S) ? 'N' : 'S';
  mbti += (totals.T > totals.F) ? 'T' : 'F';
  mbti += (totals.P > totals.J) ? 'P' : 'J';
  console.log(mbti)
  return mbti;
}