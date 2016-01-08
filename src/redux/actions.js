export const GREETING = 'GREETING';

export function greet(text) {
    return { type: GREETING, text }
}