import type { StringOrJSON } from "./types";

declare module "http" {
    interface IncomingMessage {
        query: Record<string, string | undefined>;
        body: StringOrJSON;
    }

    interface ServerResponse {
        set(headerName: string, headerValue: string): void;
        set(header: Record<string, string>): void;
        send(data: StringOrJSON, status?: number): void;
    }
}

export {};
