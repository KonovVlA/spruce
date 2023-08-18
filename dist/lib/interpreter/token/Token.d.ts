/**
 * Конструктор.
 *
 * @param {string} t тип токена.
 * @param {string} v значение, хранящееся в токене.
 * @param {ru.sbrf.ufs.prodsel.elengine.token.Token[]} a аргументы токена.
 * @class
 */
export declare class Token {
    /**
     * Аргументы токена.
     */
    a: Token[];
    /**
     * Тип токена.
     */
    t: string;
    /**
     * Значение, хранящееся в токене.
     */
    v: string;
    constructor(t: string, v: string, a: Token[]);
}
