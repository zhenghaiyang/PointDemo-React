import * as i18n from "i18n";
export class Response {}

export  class ResponseSuccess extends Response {
  private code: number;
  private message: string;
  private result: any;
  constructor (result: any, message: string = i18n.__("Response.ResponseSuccess"), code: number = 200) {
    super();
    this.message = message;
    this.result = result;
    this.code = code;
  }

  toJSON (): any {
    return {
      code: this.code,
      message: this.message,
      data: this.result
    };
  }
}

export class ResponseParamsError extends Response {
  private code: number;
  private message: string;
  private errors: any[];

  constructor (errors: any[], message: string = i18n.__("Response.ResponseParamsError"), code: number = 422) {
    super();
    this.code = code;
    this.message = message;
    this.errors = errors;
  }

  toJSON (): any {
    return {
      code: this.code,
      message: this.message,
      errors: this.errors
    };
  }
}

export class ResponseServiceError extends Response {
  private code: number;
  private message: string;

  constructor (message: string = i18n.__("Response.ResponseServiceError"), code: number = 500) {
    super();
    this.code = code;
    this.message = message;
  }

  toJSON (): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseNotFoundError extends Response {
  private code: number;
  private message: string;

  constructor (message: string = i18n.__("Response.ResponseNotFoundError"), code: number = 404) {
    super();
    this.code = code;
    this.message = message;
  }

  toJSON (): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}

export class ResponseMissingTokenError extends Response {
  private code: number;
  private message: string;
  constructor (message: string = i18n.__("Response.ResponseMissingTokenError"), code: number = 401) {
    super();
    this.code = code;
    this.message = message;
  }
  public toJSON (): any {
    return {
      code: this.code,
      message: this.message
    };
  }
}
