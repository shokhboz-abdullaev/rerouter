export function mapFromArray<T>(
  array: T[],
  keyStrategy: (v: T) => string | number,
) {
  const map: Record<string | number, T> = {};

  for (const item of array) map[keyStrategy(item)] = item;

  return map;
}
