const fibonacci = n => {
    return (n <= 2) ? 1 : fibonacci(n - 2) + fibonacci(n - 1);
  };

export default fibonacci