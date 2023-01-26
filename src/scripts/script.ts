
//Returns an array of random numbers:
export const generateRandomArray = (value: number) => {
    return Array.from({ length: value }, () => Math.floor(Math.random() * 9) + 1);
}

//Rids input string of non-number characters:
export const onlyAllowNumbers = (str: string) => {
    return str.replace(/[^0-9]/g, '').replace(/(\..*?)\..*/g, '$1');
}

//Restricts user input in form field:
export const restrictInput = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    return false;
}