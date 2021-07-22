import axios from 'axios'
import { tryRequest } from '../utils/tryRequest'

export const HTTP = axios.create({
  baseURL: 'https://tutors-51404-default-rtdb.europe-west1.firebasedatabase.app/'
})

export class HttpClient {
  /**
   * HttpClient
   *
   * @param {String}    endpointPath
   * @param {Function}  [dataMapper]  - map data received from the API
   * @param {Function}  [modelMapper] - map data sent to API
   */
  constructor (
    endpointPath,
    dataMapper = data => data,
    modelMapper = model => model
  ) {
    this.path = endpointPath
    this.dataMapper = dataMapper
    this.modelMapper = modelMapper
  }

  async fetch () {
    return tryRequest(
      () => HTTP.get(
        this.path + '.json'
      ),
      data => {
        // due to firebase
        const dataToBeMapped = Object.values(data)
        const ids = Object.keys(data)
        return ids.map((id, index) => this.dataMapper({
          id,
          ...dataToBeMapped[index]
        }))
      }
    )
  }

  async get (id) {
    return tryRequest(
      () => HTTP.get(this.path + '/' + id + '.json'),
      this.dataMapper
    )
  }

  async create (model) {
    return tryRequest(
      () => HTTP.post(this.path + '.json', this.modelMapper(model)),
      this.dataMapper
    )
  }

  async update (id, model) {
    return tryRequest(
      () => HTTP.put(this.path + '/' + id + '.json', this.modelMapper(model)),
      this.dataMapper
    )
  }
}
