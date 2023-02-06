// https://www.30secondsofcode.org/js/s/toggle-element
// TODO: rf types
export const toggleArrayElement = (arr: Array<unknown>, val: unknown) =>
  arr.includes(val) ? arr.filter((el) => el !== val) : [...arr, val];
// ============================================================================
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
// https://gist.github.com/robmathers/1830ce09695f759bf2c4df15c29dd22d
type ObjectKey = string | number | symbol;

export const groupBy = <
  K extends ObjectKey,
  TItem extends Record<K, ObjectKey>,
>(
  items: TItem[],
  key: K,
): Record<ObjectKey, TItem[]> =>
  items.reduce(
    (acc, item) => ({
      ...acc,
      [item[key]]: [...(acc[item[key]] || []), item],
    }),
    {} as Record<ObjectKey, TItem[]>,
  );
