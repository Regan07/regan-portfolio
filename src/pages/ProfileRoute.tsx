import { Navigate, useParams } from "react-router-dom";
import { ProfileProvider } from "@/context/ProfileContext";
import { DEFAULT_PROFILE, getStoredProfile, isProfileKey } from "@/data/profiles";
import Index from "./Index";
import NotFound from "./NotFound";

/** "/" -> the profile remembered in localStorage (or the default). */
export const RootRedirect = () => <Navigate to={`/${getStoredProfile() ?? DEFAULT_PROFILE}`} replace />;

/** "/:profile" -> portfolio for dotnet | fullstack | flutter, else 404. */
export const ProfileRoute = () => {
  const { profile } = useParams();
  if (!isProfileKey(profile)) return <NotFound />;
  return (
    <ProfileProvider profile={profile}>
      <Index />
    </ProfileProvider>
  );
};
