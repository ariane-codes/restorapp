export const paramsToObject = (searchParams: URLSearchParams): any => {

    const result: any = {};
    for (const [key, value] of searchParams.entries()) {
        if (key === "layout") {
            result[key] = value;
        } else {
            result[key] = value.split(",");
        }
    }
    return result;
}