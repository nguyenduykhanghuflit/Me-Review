export class HttpException extends Error {
   public status: number;
   public message: string;
   public result?: any;

   constructor(status: number, message: string, result?: any) {
      super(message);
      this.status = status;
      this.message = message;
      this.result = result || null;
   }
}
