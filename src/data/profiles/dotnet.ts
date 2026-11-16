import { fullstackData } from "./fullstack";

// .NET profile: same resume content, positioned around the .NET stack.
// Swap `resume` for a .NET-specific PDF when you have one.
export const dotnetData = {
  ...fullstackData,
  title: ".NET Full-Stack Developer",
  tagline: "Building scalable web applications with C#, ASP.NET Core and React",
  hero: {
    typedSkills: ["C#", "ASP.NET Core", ".NET", "React", "TypeScript"],
  },
};
