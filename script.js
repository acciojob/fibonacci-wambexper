function fibonacci(num) {
// your code here
	function fibonacci(num) {
    if (num <= 0) {
        return "Invalid input"; // Check for invalid input
    } else if (num === 1) {
        return 0;
    } else if (num === 2) {
        return 1;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

// Test cases
console.log(fibonacci(1)); // Output: 0
console.log(fibonacci(5)); // Output: 3
}

module.exports = fibonacci;