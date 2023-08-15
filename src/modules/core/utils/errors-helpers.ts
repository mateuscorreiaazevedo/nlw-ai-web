class UnauthorizeError extends Error {
  constructor(errorMessage = '') {
    super(errorMessage)
    this.name = 'UnauthorizeError'
  }
}

class UnprocessableEntityError extends Error {
  constructor(errorMessage = '') {
    super(errorMessage)
    this.name = 'UnprocessableEntityError'
  }
}

class NotFoundError extends Error {
  constructor(errorMessage = '') {
    super(errorMessage)
    this.name = 'NotFoundError'
  }
}

class BadRequestError extends Error {
  constructor(errorMessage = '') {
    super(errorMessage)
    this.name = 'BadRequestError'
  }
}

class ForbiddenError extends Error {
  constructor(errorMessage = '') {
    super(errorMessage)
    this.name = 'ForbiddenError'
  }
}
class ServerError extends Error {
  constructor() {
    super('Erro no servidor. Por favor, tente novamente mais tarde.')
    this.name = 'ServerError'
  }
}

export function errorsHandlers(status: number, errorMessage: string) {
  switch (status) {
    case 400:
      throw new BadRequestError(errorMessage)
    case 401:
      throw new UnauthorizeError(errorMessage)
    case 403:
      throw new ForbiddenError(errorMessage)
    case 404:
      throw new NotFoundError(errorMessage)
    case 422:
      throw new UnprocessableEntityError(errorMessage)
    default:
      throw new ServerError()
  }
}
