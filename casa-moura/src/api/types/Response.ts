export interface ResponseType<T> {
  isSuccess: boolean;
  data: T;
  error: string | null;
}
