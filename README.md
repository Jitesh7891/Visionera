# Visionera

*A new era of creativity starts with Visionera.*

---

## Description

Visionera is a full-stack AI-powered image transformation platform. Users can restore, edit, and enhance their images using advanced features like background removal, object removal, generative fill, and more. Built with Next.js and Tailwind CSS, Visionera simplifies creative workflows using modern web technologies and Cloudinary AI services.

---

## Demo

[Live Demo](https://visionera-jade.vercel.app/)

---

## Features

- Restore Image – Removes noise and imperfections from images
- Background Remove – Automatically removes image backgrounds using AI
- Generative Fill – Expands image dimensions using AI-powered outpainting
- Object Remove – Detects and removes selected objects from uploaded images
- Object Recolor – Identifies and recolors objects using text prompts
- Google Sign-In via Clerk for secure authentication
- Upload, transform, and manage images on the user’s Profile page
- Browse all transformed images on the Home page
- Recharge credits using Stripe payments (Test card: 4242 4242 4242 4242)

---

## Installation

```bash
git clone https://github.com/Jitesh7891/Visionera
cd Visionera
npm install
npm run dev
```
## Environment Variables

To run the project locally, you need to configure the following environment variables in your `.env.local` 

**Clerk Authentication**
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` – Public key used by the frontend to authenticate with Clerk.
- `CLERK_SECRET_KEY` – Secret backend key for verifying Clerk sessions and handling secure operations.
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL` – Route for user sign-in.
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL` – Route for user sign-up.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` – Redirect path after successful sign-in.
- `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` – Redirect path after successful sign-up.

**Cloudinary (Image Transformations)**
- `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` – Your Cloudinary cloud name, used in both frontend and backend.
- `CLOUDINARY_API_KEY` – Cloudinary API key (used on the backend).
- `CLOUDINARY_API_SECRET` – Secret API key for secure image transformations.

**MongoDB (Database)**
- `MONGODB_URL` – MongoDB connection string for storing user and image data.

**Stripe (Payments)**
- `NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY` – Stripe public key for rendering the payment UI.
- `STRIPE_SECRET_KEY` – Secret key used on the backend to process Stripe payments.
- `STRIPE_WEBHOOK_SECRET` – Secret for verifying Stripe webhook signatures.

**Clerk Webhooks**
- `WEBHOOK_SECRET` – Clerk webhook secret to validate incoming requests from Clerk.

**Server URL**
- `NEXT_PUBLIC_SERVER_URL` – The base URL of your deployed site used by the frontend app to hit APIs.
  - Example: `https://visionera-jade.vercel.app/` (production)
  - Optional for local development: `http://localhost:3000`
    
## Technologies Used

- **Next.js** – App router architecture for a scalable structure  
- **TypeScript** – Type safety and developer productivity  
- **Tailwind CSS** – Utility-first styling  
- **Cloudinary AI** – Image transformations and storage  
- **MongoDB** – Database for user and image data  
- **Stripe** – Payment integration for purchasing credits  
- **Clerk** – Authentication and user management  
- **Radix UI** – Accessible UI components

## Folder Structure
- `app/(auth)/` – Authentication pages (Clerk)
- `app/(root)/` – Main pages: home, profile, credits, transformation
- `app/webhooks/clerk` – Webhooks for Clerk
- `app/webhooks/stripe` – Webhooks for Stripe
- `components/shared/` – Shared layout/UI components
- `components/ui/` – Reusable UI elements
- `constants/` – Static configuration and transformation metadata
- `lib/` – Server-side image/db actions
- `hooks/` – Custom hooks (e.g., `useToast`)
- `public/` – Static assets
- `types/` – TypeScript type definitions 

---

## 🧪 Usage Instructions

1. **Log in** using Google (Clerk-powered)  
2. **Choose a transformation** from the left sidebar  
3. **Upload an image** and apply the desired transformation  
4. **Manage your creations** on the Profile page (view, update, delete)  
5. **Explore public images** on the Home page  
6. **Recharge credits** via the Credits page using Stripe  

**Test Card for Stripe Payments**  
Card Number: `4242 4242 4242 4242`  
Expiry: *Any future date*  
CVV: *Any 3-digit number*

---

Feel free to clone and explore the app to see AI and full-stack capabilities in action.
