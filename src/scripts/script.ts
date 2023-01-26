

export const generateRandomArray = (value: number) => {
    return Array.from({ length: value }, () => Math.floor(Math.random() * 9) + 1);
}

export const onlyAllowNumbers = (str: string) => {
    return str.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}