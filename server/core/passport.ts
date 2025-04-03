import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import passport from "passport";

passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!, // Fixed "secret" spelling
      callbackURL: "http://localhost:3801/auth/github/callback",
    },
    (
      // Correct TypeScript parameter typing
      accessToken: string,
      refreshToken: string,
      profile: Profile,
      done: (error: any, user?: any) => void,
    ) => {
      console.log("GitHub Profile:", profile);
      return done(null, profile);
    },
  ),
);

export { passport };
