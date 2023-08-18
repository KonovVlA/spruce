/**
 * Типы элементов пути контекста.
 * @enum
 * @property {PathElementTypeEnum} ID
 * Обращение по идентификатору.
 * @property {PathElementTypeEnum} INDEX
 * Обращение по индексу массива.
 * @property {PathElementTypeEnum} Q_KEY
 * Обращение по строковому ключу заключенного в одинарные кавычки.
 * @property {PathElementTypeEnum} DQ_KEY
 * Обращение по строковому ключу заключенного в двойные кавычки.
 * @class
 */
export declare enum PathElementTypeEnum {
    /**
     * Обращение по идентификатору.
     */
    ID = 0,
    /**
     * Обращение по индексу массива.
     */
    INDEX = 1,
    /**
     * Обращение по строковому ключу заключенного в одинарные кавычки.
     */
    Q_KEY = 2,
    /**
     * Обращение по строковому ключу заключенного в двойные кавычки.
     */
    DQ_KEY = 3
}
