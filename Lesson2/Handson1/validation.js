export function convertToNumber(n) {
  if (isNaN(n)) {
    return "Cannot convert this to a number.";
  } else {
    return parseFloat(n);
  }
}
