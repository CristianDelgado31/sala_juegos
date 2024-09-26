export interface IMessage {
    fecha: Date;
    mensaje: string;
    usuario: string;
}

export class Message implements IMessage {
    fecha: Date;
    mensaje: string;
    usuario: string;
  
    constructor(timestamp: any, mensaje: string, usuario: string) {
      this.fecha = this.convertTimestampToDate(timestamp);
      this.mensaje = mensaje;
      this.usuario = usuario;
    }
  
    private convertTimestampToDate(timestamp: any): Date {
      if (timestamp && timestamp.seconds) {
        return new Date(timestamp.seconds * 1000);
      }
      return new Date(); // Devuelve la fecha actual si no se proporciona un timestamp válido
    }
  }