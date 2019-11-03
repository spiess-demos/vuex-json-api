import { Route } from './Route'

function getRequiredAttribute (routeResource, attributeName) {
  if (!Object.prototype.hasOwnProperty.call(routeResource.attributes, attributeName)) {
    throw new Error(`Missing required resource attribute: ${attributeName}`)
  }

  return routeResource.attributes[attributeName]
}

export class JsonApiRoute extends Route {
  /**
   * Create a route from a Json:Api resource of the VuexJsonApiRoute-type:
   *
   * ``` json
   * {
   *   "type": "VuexJsonApiRoute",
   *   "attributes": {
   *     "url": "The URL of the Resource, can be relative to baseURL",
   *     "parameters": ["Parameters", "for", "the", "above", url"]
   *   }
   * }
   * ```
   *
   * @param routeResource
   */
  constructor (routeResource) {
    if (!Object.prototype.hasOwnProperty.call(routeResource, 'attributes') ||
      !Object.prototype.hasOwnProperty.call(routeResource, 'type')) {
      throw new Error('Expected json:api-like object structure')
    }

    const module = getRequiredAttribute(routeResource, 'module').toLower()
    const action = getRequiredAttribute(routeResource, 'action').toLower()
    const url = getRequiredAttribute(routeResource, 'url')
    const parameters = routeResource.attributes.parameters || []

    super(module, action, url, parameters)
  }
}
