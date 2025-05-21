import type { CookieOptions } from "./types";

export function normalizePath(path: string) {
    if (path === "/") return path;
    return path.endsWith("/") ? path.slice(0, -1) : path;
}

export function parseCookies(cookiesString: string | undefined) {
    if (!cookiesString) return {};

    return Object.fromEntries(
        cookiesString.split(";").map((cookie) => {
            const [key, value] = cookie.trim().split("=");
            return [decodeURIComponent(key), decodeURIComponent(value)];
        })
    );
}

export function toCookieString(name: string, value: string, cookieOptions?: CookieOptions) {
    let rawCookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;
    if (cookieOptions?.maxAge) rawCookieString += `; Max-Age=${cookieOptions?.maxAge}`;
    if (cookieOptions?.domain) rawCookieString += `; Domain=${cookieOptions?.domain}`;
    if (cookieOptions?.path) rawCookieString += `; Path=${cookieOptions?.path}`;
    if (cookieOptions?.expires)
        rawCookieString += `; Expires=${cookieOptions?.expires.toUTCString()}`;
    if (cookieOptions?.httpOnly) rawCookieString += `; HttpOnly`;
    if (cookieOptions?.secure) rawCookieString += `; Secure`;
    if (cookieOptions?.sameSite) rawCookieString += `; SameSite=${cookieOptions?.sameSite}`;
    return rawCookieString;
}
