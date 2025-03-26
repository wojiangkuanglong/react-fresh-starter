import type { ApiResponse } from '../ApiResponse.ts';

export type UploadFilePathParams = {
  /**
   * @description ID of pet to update
   * @type integer, int64
   */
  petId: number;
};

/**
 * @description successful operation
 */
export type UploadFile200 = ApiResponse;

export type UploadFileMutationRequest = {
  /**
   * @description Additional data to pass to server
   * @type string | undefined
   */
  additionalMetadata?: string;
  /**
   * @description file to upload
   * @type string | undefined, binary
   */
  file?: Blob;
};

export type UploadFileMutationResponse = UploadFile200;

export type UploadFileMutation = {
  Response: UploadFile200;
  Request: UploadFileMutationRequest;
  PathParams: UploadFilePathParams;
  Errors: any;
};
