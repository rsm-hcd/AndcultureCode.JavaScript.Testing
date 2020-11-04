import { TestUtils } from "./test-utils";
import faker from "faker";
import { testLoop } from "./shared-specs";

describe("TestUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region randomCase
    // -----------------------------------------------------------------------------------------

    describe("randomCase", () => {
        testLoop("it randomizes case of string", () => {
            // Arrange & Act
            const result = TestUtils.randomCase("a".repeat(20));

            // Assert
            expect(result).toContain("a");
            expect(result).toContain("A");
        });
    });

    // #endregion randomCase

    // -----------------------------------------------------------------------------------------
    // #region randomFilename
    // -----------------------------------------------------------------------------------------

    describe("randomFilename", () => {
        testLoop("it returns a random string with a file extension", () => {
            // Arrange & Act
            const result = TestUtils.randomFilename();

            // Assert
            expect(result).not.toBeEmpty();
            const name = result.split(".")[0];
            const extension = result.split(".")[1];
            expect(name.length).toBeGreaterThanOrEqual(1);
            expect(extension.length).toBeGreaterThanOrEqual(1);
        });
    });

    // #endregion randomFilename

    // -----------------------------------------------------------------------------------------
    // #region randomKey
    // -----------------------------------------------------------------------------------------

    describe("randomKey", () => {
        testLoop(
            "given an object with at least one key, it returns a random key",
            () => {
                // Arrange
                const keys = faker.random.words(5).split(" ");
                const obj = {};
                keys.forEach((key: string) => {
                    // Assign the randomly generated keys to the object
                    obj[key] = faker.random.uuid();
                });

                // Act
                const result = TestUtils.randomKey(obj);

                // Assert
                expect(Object.keys(obj)).toContain(result);
            }
        );

        testLoop("given an object without keys, it returns undefined", () => {
            // Arrange
            const obj = {};

            // Act
            const result = TestUtils.randomKey(obj);

            // Assert
            expect(result).toBeUndefined();
        });
    });

    // #endregion randomKey

    // -----------------------------------------------------------------------------------------
    // #region randomObject
    // -----------------------------------------------------------------------------------------

    describe("randomObject", () => {
        testLoop("returns object with passed amount of keys", () => {
            // Arrange & Act
            const result = TestUtils.randomObject(15);

            // Assert
            expect(Object.keys(result).length).toEqual(15);
        });

        testLoop(
            "returns object with random amount of keys less or equal than 10",
            () => {
                // Arrange & Act
                const result = TestUtils.randomObject();

                // Assert
                expect(Object.keys(result).length).toBeGreaterThan(0);
                expect(Object.keys(result).length).toBeLessThanOrEqual(10);
            }
        );
    });

    // #endregion randomObject

    // -----------------------------------------------------------------------------------------
    // #region randomPath
    // -----------------------------------------------------------------------------------------

    describe("randomPath", () => {
        testLoop("it returns a random path", () => {
            // Arrange & Act
            const result = TestUtils.randomPath();

            // Assert
            expect(result).not.toBeEmpty();
            expect(result).toContain("/");
        });
    });

    // #endregion randomPath

    // -----------------------------------------------------------------------------------------
    // #region randomValue
    // -----------------------------------------------------------------------------------------

    describe("randomValue", () => {
        testLoop(
            "given an object with at least one key, it returns a random value",
            () => {
                // Arrange
                const keys = faker.random.words(5).split(" ");
                const obj = {};
                keys.forEach((key: string) => {
                    // Assign the randomly generated keys to the object
                    obj[key] = faker.random.number();
                });

                // Act
                const result = TestUtils.randomValue<number>(obj);

                // Assert
                expect(Object.values(obj)).toContain(result);
            }
        );

        testLoop("given an object without keys, it returns undefined", () => {
            // Arrange
            const obj = {};

            // Act
            const result = TestUtils.randomValue(obj);

            // Assert
            expect(result).toBeUndefined();
        });
    });

    // #endregion randomValue

    // -----------------------------------------------------------------------------------------
    // #region randomWord
    // -----------------------------------------------------------------------------------------

    describe("randomWord", () => {
        testLoop("it only returns a single word", () => {
            // Arrange & Act
            const result = TestUtils.randomWord();

            // Assert
            expect(result).not.toContain(" ");
        });

        testLoop("it returns only alphanumeric characters", () => {
            // Arrange & Act
            const result = TestUtils.randomWord();

            // Assert
            expect(result).not.toMatch(/[^a-zA-Z0-9]/);
        });
    });

    // #endregion randomWord

    // -----------------------------------------------------------------------------------------
    // #region randomWords
    // -----------------------------------------------------------------------------------------

    describe("randomWords", () => {
        testLoop("it returns at least two values", () => {
            // Arrange & Act
            const result = TestUtils.randomWords();

            // Assert
            expect(result.length).toBeGreaterThanOrEqual(2);
        });

        testLoop("it returns only alphanumeric characters", () => {
            // Arrange & Act
            const result = TestUtils.randomWords();

            // Assert
            result.forEach((word: string) =>
                expect(word).not.toMatch(/[^a-zA-Z0-9]/)
            );
        });
    });

    // #endregion randomWords
});
