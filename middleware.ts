import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  console.log(auth);
  await auth.protect();
});

export const config = {
  matcher: [
    // Exclude: _next, api, sign-in, sign-up, and the root path `/`
    '/((?!^$|^/$|_next|api|sign-in|sign-up).*)',
  ],
};
