
export class Request {
  /**
   * Request config
   *
   * @param {Object}                config
   * @param {String}                config.id
   * @param {String}                config.email
   * @param {String}                config.message
   * @param {String}                 config.tutorId
   */
  constructor (config) {
    this.id = config.id
    this.message = config.message
    this.email = config.email
    this.tutorId = config.tutorId
  }

  static fromApi (request) {
    if (!request) {
      return null
    }

    const {
      id,
      message,
      email,
      tutorId
    } = request

    return new Request({
      id,
      message,
      email,
      tutorId
    })
  }

  static toApi (request) {
    const {
      message,
      email,
      tutorId
    } = request

    return {
      message,
      email,
      tutorId
    }
  }
}
