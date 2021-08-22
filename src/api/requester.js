const url = "http://api.kdd.com";

const jsonRequester = async (method, endpoint, optionParam) => {
    if (!method || !endpoint) {
        throw new Error("Please specify method or endpoint")
    }

    optionParam = {
        headers: {
            "content-type": "application/json; charset=UTF-8"
        },
        method,
        ...optionParam
    }

    const resp = await fetch(url + endpoint, optionParam);

    return resp;
}
export const API = {
    get: (path) => jsonRequester("GET", path),
    post: (path, body) => jsonRequester("POST", path, body),
    // WIP
    patch: () => console.log("patch"),
    delete: () => console.log("delete")
}
