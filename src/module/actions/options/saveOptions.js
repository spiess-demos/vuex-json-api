export function saveOptions ({ currentItemState, changedItemState, options }) {
  const returnedItemState = JSON.parse(JSON.stringify(changedItemState))

  if (typeof options !== 'undefined' && Object.prototype.hasOwnProperty.call(returnedItemState, 'attributes')) {
    if (Object.prototype.hasOwnProperty.call(options, 'sendFullAttributes')) {
      options.sendFullAttributes.forEach(attr => {
        if (Object.prototype.hasOwnProperty.call(returnedItemState.attributes, attr)) {
          returnedItemState.attributes[attr] = currentItemState.attributes[attr]
        }
      })
    }
    if (Object.prototype.hasOwnProperty.call(options, 'sendUnchangedAttributes')) {
      options.sendUnchangedAttributes.forEach(attr => {
        returnedItemState.attributes[attr] = currentItemState.attributes[attr]
      })
    }
  }

  return returnedItemState
}