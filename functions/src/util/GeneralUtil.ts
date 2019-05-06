export const getRandomPostfix = (length: number): string => {
    const t: string = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result: string = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = ~~ (Math.random() * t.length);
        result += t[randomIndex];
    }
    return result;
}
