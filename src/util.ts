export const deepCopyFunction = (inObject: any): any => {
    let value, key;

    if (typeof inObject !== 'object' || inObject === null) {
        return inObject;
    }

    const outObject: any = Array.isArray(inObject) ? [] : {};

    for (key in inObject) {
        value = inObject[key];
        outObject[key] = deepCopyFunction(value);
    }

    return outObject;
};
