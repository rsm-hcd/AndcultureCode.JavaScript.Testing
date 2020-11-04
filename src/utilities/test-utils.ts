import faker from "faker";

// -----------------------------------------------------------------------------------------
// #region Functions
// -----------------------------------------------------------------------------------------

/**
 * Randomize case of string
 */
const randomCase = (str: string): string =>
    str
        .split("")
        .map((char) =>
            faker.random.boolean() ? char.toUpperCase() : char.toLowerCase()
        )
        .join("");

/**
 * Wrapper around `faker.system.fileName`
 */
const randomFilename = (): string => faker.system.fileName();

/**
 * Returns a random key from the given object. If the object has no keys, it returns `undefined`.
 *
 * @param {*} obj
 * @returns {string}
 */
const randomKey = (obj: any): string =>
    faker.random.arrayElement(Object.keys(obj));

/**
 * Generates random object
 */
const randomObject = (keyCount?: number) => {
    const randomObject: Record<string, any> = {};
    keyCount = keyCount ?? faker.random.number({ min: 1, max: 10 });

    for (let i = 0; i < keyCount; i++) {
        const key = faker.random.uuid();

        randomObject[key] = randomWord();
    }

    return randomObject;
};

/**
 * Generates random path
 */
const randomPath = (): string => faker.system.directoryPath();

/**
 * Returns a random value from the given object. If the object has no keys, it returns `undefined`.
 *
 * @template TValue
 * @param {*} obj
 * @returns {TValue}
 */
const randomValue = <TValue = any>(obj: any): TValue => obj[randomKey(obj)];

/**
 * Wrapper of faker.random.word.
 *
 * Unfortunately there is an unresolved bug https://github.com/Marak/faker.js/issues/661
 * and it will occasionally return multiple which can cause test flake
 */
const randomWord = (): string =>
    faker.random
        .word()
        .split(" ")[0]
        .replace(/[^A-Za-z0-9]/gi, "");

// #endregion Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export const TestUtils = {
    randomCase,
    randomFilename,
    randomKey,
    randomObject,
    randomPath,
    randomValue,
    randomWord,
};

// #endregion Exports
