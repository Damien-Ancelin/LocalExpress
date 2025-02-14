export { groupByKey };

function groupByKey<T, K extends keyof T>(arr: T[], key: K) {
  const obj = Object.groupBy(arr, (item) => item[key] as PropertyKey);

  return obj as {
    [key: string]: T[];
  };
}
