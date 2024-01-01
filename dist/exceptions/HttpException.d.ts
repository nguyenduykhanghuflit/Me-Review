export declare class HttpException extends Error {
    status: number;
    message: string;
    result?: any;
    constructor(status: number, message: string, result?: any);
}
