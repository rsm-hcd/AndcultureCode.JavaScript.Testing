// -----------------------------------------------------------------------------------------
// #region Public Functions
// -----------------------------------------------------------------------------------------

/**
 * Utility function for running a test body a certain number of times. Useful for ensuring specific
 * behavior on implementations that return randomized data and edge cases will not immediately be
 * exposed.
 *
 * @param {string} name Name of the test
 * @param {Function} fn Function body to run (can be asynchronous)
 * @param {number} [times=100] Number of times to run the test function.
 */
const testLoop = (name: string, fn: Function, times: number = 100) => {
    if (times < 1) {
        throw new Error("'times' should be >= 1");
    }

    test(name, async () => {
        for (let i = 0; i < times; i++) {
            await fn();
        }
    });
};

// #endregion Public Functions

// -----------------------------------------------------------------------------------------
// #region Exports
// -----------------------------------------------------------------------------------------

export { testLoop };

// #endregion Exports
