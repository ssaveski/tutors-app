export async function tryRequest (request, dataMapper = data => data) {
  try {
    const response = await request()

    const data = dataMapper(response.data)

    return {
      success: true,
      data
    }
  } catch (error) {
    /* eslint-disable-next-line no-console */
    console.error('API error', error)

    return {
      success: false,
      error
    }
  }
}
