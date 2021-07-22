
export class Tutor {
  /**
   * Tutor config
   *
   * @param {Object}                config
   * @param {String}                config.id
   * @param {String}                config.firstName
   * @param {String}                config.lastName
   * @param {Array}                 config.areas
   * @param {String}                config.description
   * @param {Number}                config.hourlyRate
   */
  constructor (config) {
    this.id = config.id
    this.firstName = config.firstName
    this.lastName = config.lastName
    this.areas = config.areas
    this.description = config.description
    this.hourlyRate = config.hourlyRate
  }

  static fromApi (tutor) {
    if (!tutor) {
      return null
    }

    const {
      id,
      firstName,
      lastName,
      areas,
      description,
      hourlyRate
    } = tutor

    return new Tutor({
      id,
      firstName,
      lastName,
      areas,
      description,
      hourlyRate
    })
  }

  static toApi (tutor) {
    const {
      firstName,
      lastName,
      areas,
      description,
      hourlyRate
    } = tutor

    return {
      firstName,
      lastName,
      areas,
      description,
      hourlyRate
    }
  }
}
