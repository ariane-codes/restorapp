export const paramsToObject = (searchParams: URLSearchParams): any => {

    const result: any = {};
    for (const [key, value] of searchParams.entries()) {
        if (key === "layout") {
            result[key] = value;
        } else {
            if (["price", "rating"].includes(key)) {                
                result[key] = value.split(",").map((numberAsString: string) => parseInt(numberAsString));
            } else {
                result[key] = value.split(",");
            }
        }
    }
    return result;
}