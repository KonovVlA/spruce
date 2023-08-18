/**
 * Служебный функционал для работы со строками.
 * @class
 */
export declare class StringUtils {
    constructor();
    /**
     * Производит сравнение строк (проверка первого аргумента на {@link null} не производится).
     * <p>
     * Функция добавлена для упрощения генерируемого JSweet кода метода {@link String#equals(Object)}.
     *
     * @param {string} string1 исходная строка.
     * @param {string} string2 строка, с которой производится сравнение.
     *
     * @return {boolean} {@code true} если строки равны, {@code false} иначе.
     */
    static areStringsEqual(string1: string, string2: string): boolean;
    /**
     * Производит сравнение строк.
     * <p>
     * Функция добавлена для связывания методов {@link String#compareTo(String)} и лексикографического сравнения строк
     * JavaScript.
     *
     * @param {string} string1 первая строка.
     * @param {string} string2 вторая строка.
     *
     * @return {number} {@code 0} в случае равенства строк, число меньше нуля, если 1-я строка меньше второй, число больше нуля
     * иначе.
     */
    static compareTo(string1: string, string2: string): number;
    /**
     * Производит конкатенацию строковых представлений данных списка (подразумевается, что список содержит хотя бы один
     * элемент).
     *
     * @param {*[]} sourceList список объектов.
     *
     * @return {string} результат конкатенации строковых представлений данных списка.
     */
    static concat(sourceList: Array<any>): string;
    /**
     * Проверяет, что переданное значение равно {@code null} или является пустой строкой.
     *
     * @param {string} value значение для проверки.
     *
     * @return {boolean} {@code true} если переданное значение равно {@code null} или является пустой строкой, {@code false}
     * иначе.
     */
    static isNullOrEmpty(value: string): boolean;
    /**
     * Возвращает индекс последнего вхождения искомой подстроки в исходную строку. Поиск начинается с указанной
     * позиции.
     * <p>
     * Функция добавлена в связи с багом в реализации lastIndexOf в Internet Explorer.
     * <p>
     * {@code "Тестовая строка теста".lastIndexOf("ес", 0) == 17}, а по спецификации и в Java результат {@code -1}.
     *
     * @param {string} sourceString исходная строка.
     * @param {string} searchString искомая подстрока.
     * @param {number} index        позиция начала поиска.
     *
     * @return {number} индекс последнего вхождения искомой подстроки в исходную строку.
     */
    static lastIndexOf(sourceString: string, searchString: string, index: number): number;
    /**
     * Производит проверку строки на предмет соответствия регулярному выражению.
     * <p>
     * Функция добавлена для связывания методов {@link String#matches(String)} и метода {@code test} объекта {@code
     * RegExp} JavaScript.
     *
     * @param {string} sourceString строка для проверки.
     * @param {string} regExp       строка регулярного выражения проверки.
     *
     * @return {boolean} {@code true} если строка соответствует регулярному выражению, {@code false} иначе.
     */
    static matchByRegExp(sourceString: string, regExp: string): boolean;
    /**
     * Производит замены символов в строке в соответствии с переданным мапингом.
     *
     * @param {string} sourceString исходная строка.
     * @param {*} map          мапинг, по которому производятся замены (ключ - символ (как строка), значение - строка).
     *
     * @return {string} строка с произведенными заменами.
     */
    static replaceUsingMap(sourceString: string, map: any): string;
    /**
     * Производит разбиение строки по регулярному выражению.
     * <p>
     * Функция добавлена, т.к. реализация метода {@link String#split} в Java воспринимает входную строку, как регулярное
     * выражение, а аналогичный метод в JavaScript - как строку, соответственно, ее надо принудительно преобразовывать в
     * {@code RegExp}.
     *
     * @param {string} sourceString строка для разбиения.
     * @param {string} regExp       строка регулярного выражения разбиения.
     *
     * @return {java.lang.String[]} массив строк, на который разбивается строка регулярным выражением.
     */
    static splitByRegExp(sourceString: string, regExp: string): string[];
}
