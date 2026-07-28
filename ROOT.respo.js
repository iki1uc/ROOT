// ROOT.respo.js

export function ROOT_RESPO(files) {

    const errors = [];
    const missing = [];
    const tmp = [];
    const room = [];

    for (const f of files) {

        if (f.includes(".tmp")) tmp.push(f);
        if (f.includes(".room")) room.push(f);

        if (f.includes("undefined") || f.includes("null")) {
            errors.push(f);
        }

        if (f.trim() === "") {
            missing.push(f);
        }
    }

    if (errors.length > 0) return "BREAK";
    if (missing.length > 0) return "VOID";

    if (tmp.length > 10) return "ECHO";
    if (room.length > 10) return "NOK";

    if (tmp.length === 0 && room.length === 0) return "ROOT";

    return "OK";
}
