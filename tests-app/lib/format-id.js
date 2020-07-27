import getConfig from 'next/config'
const { publicRuntimeConfig: { URL } } = getConfig()

export default id => /^((http|https):\/\/)/.test(id) ? id.replace(URL + '/big5/resultados/', '').replace(' ', '').toLowerCase() : id ? id.replace(' ', '') : id
