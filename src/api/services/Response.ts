export class Response {
  constructor(
    public isSuccess: boolean,
    public data: any,
    public error: string | null,
  ) {}
  static Success(data: any) {
    return new Response(true, data, null);
  }

  static Failure(error: string) {
    return new Response(false, null, error);
  }
}
