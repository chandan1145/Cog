import type { IncomingMessage, ServerResponse } from "http";

export type Route = {
    method: RequestMethod;
    path: string;
    handler: RequestHandler;
};

export type Middleware = {
    path: string;
    handler: MiddlewareHandler;
};

export type MiddlewareHandler = (
    req: IncomingMessage & { url: string },
    res: ServerResponse,
    next: () => void
) => void;

export type RequestHandler = (req: IncomingMessage & { url: string }, res: ServerResponse) => void;

export type RequestMethod = "GET" | "POST" | "PUT" | "DELETE" | "HEAD" | "OPTIONS" | "PATCH";

export type StringOrJSON = string | Record<string, unknown> | unknown[];

export type CookieOptions = {
    maxAge?: number;
    expires?: Date;
    path?: string;
    secure?: boolean;
    domain?: string;
    httpOnly?: boolean;
    sameSite?: "Strict" | "Lax" | "None";
};
