/**
 * Represents an option with a display name and an internal value.
 */
export interface LabelValue {
  /**
   * Display name. The name that will be shown to the user. (e.g., "Graphic Tees").
   */
  label: string;
  /**
   * Internal value. Typically used for identification in backend or logic operations. (e.g., "graphic_tees").
   */
  value: string;
}


/**
 * Represents an option with a display name and an internal value that has color data.
 */
export interface ColorLabelValue {
  /**
   * Display name. The name that will be shown to the user. (e.g., "Graphic Tees").
   */
  label: string;
  /**
   * Internal value. Typically used for identification in backend or logic operations. (e.g., "graphic_tees").
   */
  value: string;
  
  red: number;
  green: number;
  blue: number;
}