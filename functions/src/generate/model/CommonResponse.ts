import * as express from 'express';

export default interface CommonResponse<T> extends express.Response {
    result_code: number;
    message: string;
    data: T;
}
