/**
 * Interface of all responses
 */
export interface IResponseData<T> {
  code: number;
  message?: string;
  data?: T;
}

/**
 * Utils helper
 */
export class TransferObjectUtils {
  /**
   * Compose all data to result response package
   *
   * @param responseCode - 200 | 400 | 500
   * @param message - any info text message
   * @param data - response data object
   *
   * @return ready object for REST response
   */
  public static createResponseObject<T = object>(responseCode: number, message: string, data: T): IResponseData<T> {
    const result: IResponseData<T> = {
      code: responseCode || 200
    };

    if (message) {
      result.message = message;
    }
    if (data) {
      result.data = data;
    }

    return result;
  }
}
