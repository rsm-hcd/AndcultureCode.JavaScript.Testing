import { TestUtils } from "./test-utils";

describe("TestUtils", () => {
    // -----------------------------------------------------------------------------------------
    // #region randomWord
    // -----------------------------------------------------------------------------------------

    describe("randomWord", () => {
        test("it only returns a single word", () => {
            // Arrange & Act
            const result = TestUtils.randomWord();

            // Assert
            expect(result).not.toContain(" ");
        });
    });

    // #endregion randomWord
});
