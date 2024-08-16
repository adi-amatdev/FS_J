// Function to return a promise that resolves after t1 seconds
function waitT1(t1) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t1 * 1000);
    });
}

// Function to return a promise that resolves after t2 seconds
function waitT2(t2) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t2 * 1000);
    });
}

// Function to return a promise that resolves after t3 seconds
function waitT3(t3) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, t3 * 1000);
    });
}

// Function to wait for all three promises to resolve and return the time taken
function waitForAll(t1, t2, t3) {
    const start = Date.now();

    return Promise.all([waitT1(t1), waitT2(t2), waitT3(t3)]).then(() => {
        const end = Date.now();
        return end - start;
    });
}

// Example usage
waitForAll(1, 2, 3).then((timeTaken) => {
    console.log(`Total time taken: ${timeTaken} milliseconds`);
});
