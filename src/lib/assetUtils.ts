// Utility functions for handling asset paths with base URL

/**
 * Get the correct asset path including the base URL for the application
 * @param path - The asset path (without leading slash)
 * @returns The complete asset path with base URL
 */
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  return basePath + path.replace(/^\//, '');
};

/**
 * Get the favicon path with correct base URL
 * @returns The favicon path with base URL
 */
export const getFaviconPath = (): string => {
  return getAssetPath('favicon.ico');
};

/**
 * Get gallery image path with correct base URL
 * @param imageName - The image file name
 * @returns The complete gallery image path
 */
export const getGalleryImagePath = (imageName: string): string => {
  return getAssetPath(`gallery/${imageName}`);
};

/**
 * Get resume download path with correct base URL
 * @returns The resume file path
 */
export const getResumePath = (): string => {
  return getAssetPath('ReganAnto_Resume.docx');
};