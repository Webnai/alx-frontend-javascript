export const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  let called = weakMap.get(endpoint) || 0;

  called += 1;
