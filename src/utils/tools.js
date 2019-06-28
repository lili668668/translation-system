export const linkArray = (array, idKey, nextKey, start) => {
  const newArray = []
  let pointerItem = array.find(item => item[idKey] === start)
  const findPointerItme = item => item[idKey] === pointerItem[nextKey]
  while (pointerItem !== undefined && pointerItem[nextKey] !== undefined) {
    newArray.push(pointerItem)
    pointerItem = array.find(findPointerItme)
  }
  if (pointerItem !== undefined) newArray.push(pointerItem)
  return newArray
}

export const trimObjectValues = (object) => {
  return Object.keys(object)
    .map(key => ({ [key]: object[key].trim() }))
    .reduce((collection, item) => Object.assign({}, collection, item), {})
}
