// A generic helper function to update arrays immutably
export function updateArray<T>(arr: T[], updater: (item: T) => boolean): T[] {
  return arr.map(item => (updater(item) ? { ...item } : item));
}
