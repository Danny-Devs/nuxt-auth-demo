import { NuxtAuthHandler } from '#auth';
import GithubProvider from 'next-auth/providers/github';
import CredentialsProvider from 'next-auth/providers/credentials';

// Get runtime config for secret
const runtimeConfig = useRuntimeConfig();

export default NuxtAuthHandler({
  // Secret used for session encryption - use the one from runtime config
  secret: runtimeConfig.authSecret,

  providers: [
    // @ts-expect-error You need to use .default here for it to work during SSR
    GithubProvider.default({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    }),
    // @ts-expect-error You need to use .default here for it to work during SSR
    CredentialsProvider.default({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        // Demo authorization - in production you'd query your database
        if (
          credentials?.username === 'demo' &&
          credentials?.password === 'password'
        ) {
          return {
            id: '1',
            name: 'Demo User',
            email: 'demo@example.com'
          };
        }
        return null;
      }
    })
  ]
});
