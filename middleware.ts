import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware(async (auth, req) => {
  console.log(auth);
  await auth.protect();
});

export const config = {
  matcher: [
    // Exclude public pages like sign-in and sign-up, in addition to _next and static files.
    '/((?!_next|api|sign-in|sign-up).*)',
  ],
};
