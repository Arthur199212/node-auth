abstract class HttpError extends Error {
  public status!: number
}

export class BadRequest extends HttpError {
  constructor (message = 'Bad Request') {
    super(message)

    this.status = 400
  }
}

export class Unautherized extends HttpError {
  constructor (message = 'Unautherized') {
    super(message)

    this.status = 401
  }
}
