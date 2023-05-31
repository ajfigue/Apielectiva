import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hola, bienvenido a nuestra api de Electiva de profundización I';
  }
}
