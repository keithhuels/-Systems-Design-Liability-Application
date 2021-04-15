import { BadRequestException, HttpStatus } from '@nestjs/common';

export class CustomException extends BadRequestException {
  constructor(message: string, code: string) {
    super(message, HttpStatus.BAD_REQUEST.toString());

    this.code = code;
  }

  code: string;
}
