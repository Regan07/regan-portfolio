import { flutterData } from "./flutter";
import { fullstackData } from "./fullstack";
import { dotnetData } from "./dotnet";

export const PROFILE_KEYS = ["dotnet", "fullstack", "flutter"] as const;
export type ProfileKey = (typeof PROFILE_KEYS)[number];
export const DEFAULT_PROFILE: ProfileKey = "fullstack";

export type PortfolioData = typeof flutterData;

export const profiles: Record<ProfileKey, PortfolioData> = {
  dotnet: dotnetData,
  fullstack: fullstackData,
  flutter: flutterData,
};

export const isProfileKey = (v: unknown): v is ProfileKey =>
  typeof v === "string" && (PROFILE_KEYS as readonly string[]).includes(v);

const STORAGE_KEY = "portfolio-profile";

export const getStoredProfile = (): ProfileKey | null => {
  try {
    const v = localStorage.getItem(STORAGE_KEY);
    return isProfileKey(v) ? v : null;
  } catch {
    return null;
  }
};

export const storeProfile = (key: ProfileKey) => {
  try {
    localStorage.setItem(STORAGE_KEY, key);
  } catch {
    /* storage unavailable (private mode): the URL still drives the profile */
  }
};
