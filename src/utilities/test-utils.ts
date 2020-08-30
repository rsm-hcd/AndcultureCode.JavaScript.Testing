import faker from "faker";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Returns a random key from the given object. If the object has no keys, it returns `undefined`.
 *
 * @param {*} obj
 * @returns {string}
 */
const _randomKey = (obj: any): string =>
    faker.random.arrayElement(Object.keys(obj));

/**
 * Returns a random value from the given object. If the object has no keys, it returns `undefined`.
 *
 * @template TValue
 * @param {*} obj
 * @returns {TValue}
 */
const _randomValue = <TValue = any>(obj: any): TValue => obj[_randomKey(obj)];

/**
 * Wrapper of faker.random.word.
 *
 * Unfortunately there is an unresolved bug https://github.com/Marak/faker.js/issues/661
 * and it will occasionally return multiple which can cause test flake
 */
const _randomWord = (): string => faker.random.word().split(" ")[0];

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const TestUtils = {
    randomKey: _randomKey,
    randomValue: _randomValue,
    randomWord: _randomWord,
};

// #endregion Exports
