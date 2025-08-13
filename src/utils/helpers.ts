export const wait = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
export const slowWait: (num: number, ms: number) => string = (num, ms) => {
  const startTime = Date.now();
  while (Date.now() - startTime < ms) {
    num = (num * num) % 999;
  }
  return `🔐 Hashed Value: ${num}`;
};
