function addDigits(num: number): number {
    return num < 9 ? num : num % 9 == 0 ? 9 : num % 9;
};