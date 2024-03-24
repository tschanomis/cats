export const generateDistinctNumbers = (maxLength: number): number[] => {
  if (maxLength <= 2) return [];
  const generateNumber = () => Math.floor(Math.random() * maxLength);
  const num1 = generateNumber();
  let num2 = generateNumber();
  while (num2 === num1) num2 = generateNumber();
  return [num1, num2];
};
