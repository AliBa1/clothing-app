export interface SortType {
  sort: boolean;
  ascending: boolean;
}

export function sortStringsAsc(a: string, b: string): number {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  if (aLower < bLower) {
    return -1;
  }
  if (aLower > bLower) {
    return 1;
  }
  return 0;
}

export function sortStringsDes(a: string, b: string): number {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  if (aLower < bLower) {
    return 1;
  }
  if (aLower > bLower) {
    return -1;
  }
  return 0;
}

export function sortNumbersAsc(a: number, b: number): number {
  return a - b;
}

export function sortNumbersDes(a: number, b: number): number {
  return b - a;
}
