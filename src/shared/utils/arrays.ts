// https://www.30secondsofcode.org/js/s/toggle-element
export const toggleArrayElement = (arr: Array<unknown>, val: unknown) =>
  arr.includes(val) ? arr.filter((el) => el !== val) : [...arr, val];
