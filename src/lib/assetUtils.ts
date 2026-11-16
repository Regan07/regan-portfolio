// Utility functions for handling asset paths with base URL

/**
 * Get the correct asset path including the base URL for the application
 * @param path - The asset path (without leading slash)
 * @returns The complete asset path with base URL
 */
export const getAssetPath = (path: string): string => {
  const basePath = import.meta.env.BASE_URL || '/';
  const normalizedBase = basePath.endsWith('/') ? basePath : basePath + '/';
  return normalizedBase + path.replace(/^\//, '');
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


export interface ResumeFile {
  /** File name inside /public */
  file: string;
  /** Name given to the downloaded file */
  filename: string;
}

/**
 * Programmatically trigger a resume download using fetch + blob.
 * Falls back to window.open if fetch fails.
 */
export const downloadResume = async (
  e: { preventDefault: () => void } | undefined,
  resume: ResumeFile,
): Promise<void> => {
  if (e) e.preventDefault();
  const url = getAssetPath(resume.file);
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('fetch failed');
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = blobUrl;
    a.download = resume.filename;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    // Small delay before cleanup to ensure download starts
    setTimeout(() => {
      URL.revokeObjectURL(blobUrl);
      document.body.removeChild(a);
    }, 100);
  } catch {
    window.open(url, '_blank');
  }
};
