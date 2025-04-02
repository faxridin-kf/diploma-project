import { Strategy as GitHubStrategy, Profile } from "passport-github2";
import passport from "passport";
passport.use(
  new GitHubStrategy(
    {
      clientID: process.env.GITHUB_CLIENT_ID!,
      clientSecret: process.env.GITHUB_CLIENT_SECRET!,
      callbackURL: "http://localhost:3001/auth/github/callback",
    },
    (
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
