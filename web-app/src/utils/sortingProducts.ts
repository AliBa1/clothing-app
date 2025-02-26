export interface SortType {
  sort: boolean;
  ascending: boolean;
}

// export function sortNameAsc(a: BrandProduct, b: BrandProduct): number {
//   const aLower = a.name.toLowerCase();
//   const bLower = b.name.toLowerCase();
//   if (aLower < bLower) {
//     return -1;
//   }
//   if (aLower > bLower) {
//     return 1;
//   }
//   return 0;
// }

// export function sortNameDes(a: BrandProduct, b: BrandProduct): number {
//   const aLower = a.name.toLowerCase();
//   const bLower = b.name.toLowerCase();
//   if (aLower < bLower) {
//     return 1;
//   }
//   if (aLower > bLower) {
//     return -1;
//   }
//   return 0;
// }

// Change name to sort alphabetically
export function sortStringsAsc(a: string, b: string): number {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  console.log('Colors: ', aLower, bLower);
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
