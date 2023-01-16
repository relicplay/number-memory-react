

export const generateRandomArray = (iterations: number) => {
    return Array.from({ length: iterations }, () => Math.floor(Math.random() * 9) + 1);
}

export const onlyAllowNumbers = (str: string) => {
    return str.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}