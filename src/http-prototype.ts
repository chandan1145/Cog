import { ServerResponse } from "http";

ServerResponse.prototype.send = function (data, status = 200) {
    if (typeof data === "object" || Array.isArray(data)) {
        this.writeHead(status, { "Content-Type": "application/json" });
        this.end(JSON.stringify(data));
    } else {
        this.writeHead(status, { "Content-Type": "text/plain" });
        this.end(data);
    }
};

ServerResponse.prototype.set = function (
    headerName: string | Record<string, string>,
    headerValue?: string
) {
    if (typeof headerName === "string" && headerValue !== undefined) {
        this.setHeader(headerName, headerValue);
    } else if (typeof headerName === "object") {
        const headersMap = new Map(Object.entries(headerName));
        this.setHeaders(headersMap);
    } else {
        throw new Error("Invalid arguments of res.set");
    }
};
