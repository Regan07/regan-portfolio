import { createContext, useContext, useEffect, ReactNode } from "react";
import { PortfolioData, ProfileKey, profiles, storeProfile } from "@/data/profiles";

interface ProfileValue {
  key: ProfileKey;
  data: PortfolioData;
}

const ProfileContext = createContext<ProfileValue | null>(null);

export const ProfileProvider = ({ profile, children }: { profile: ProfileKey; children: ReactNode }) => {
  const data = profiles[profile];

  useEffect(() => {
    storeProfile(profile);
    document.title = `${data.name} - ${data.title} Portfolio`;
  }, [profile, data]);

  return <ProfileContext.Provider value={{ key: profile, data }}>{children}</ProfileContext.Provider>;
};

const useProfileContext = () => {
  const ctx = useContext(ProfileContext);
  if (!ctx) throw new Error("Profile hooks must be used inside <ProfileProvider>");
  return ctx;
};

/** Portfolio content for the active profile. */
export const usePortfolio = () => useProfileContext().data;
export const useProfileKey = () => useProfileContext().key;
