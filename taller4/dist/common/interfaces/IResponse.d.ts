import { HttpStatus } from "@nestjs/common";
export interface IDefaultResponse {
    status: HttpStatus;
    message: string;
}
export interface ISuccessResponse {
    status: HttpStatus;
    data: any;
    message?: string;
}
export declare class DefaultResponse implements IDefaultResponse {
    status: HttpStatus;
    message: string;
}
export declare class DefaultSuccessResponse implements ISuccessResponse {
    status: HttpStatus;
    data: any;
}
