"use client";

import { loadStripe } from "@stripe/stripe-js";
import { useEffect } from "react";

import { Button } from "../ui/button";
import { useToast } from "@/hooks/use-toast";
import { checkoutCredits } from "@/lib/actions/transaction.actions";

const Checkout = ({
  plan,
  amount,
  credits,
  buyerId,
}: {
  plan: string;
  amount: number;
  credits: number;
  buyerId: string;
}) => {
  const { toast } = useToast();

  useEffect(() => {
    loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
  }, []);

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    if (query.get("success")) {
      toast({
        title: "Order placed!",
        description: "You will receive an email confirmation",
        duration: 5000,
        className: "success-toast",
      });
    }

    if (query.get("canceled")) {
      toast({
        title: "Order canceled!",
        description: "Continue to shop around and checkout when you're ready",
        duration: 5000,
        className: "error-toast",
      });
    }
  }, []);

  const onCheckout = async () => {
    try {
      const transaction = {
        plan,
        amount,
        credits,
        buyerId,
      };

      await checkoutCredits(transaction);
    } catch (error) {
      console.log(error)
      toast({
        title: "Checkout failed",
        description: "Something went wrong during checkout",
        duration: 5000,
        className: "error-toast",
      });
    }
  };

  return (
    <section>
      <Button
        type="button"
        onClick={onCheckout}
        className="w-full rounded-full bg-purple-gradient bg-cover"
      >
        Buy Credit
      </Button>
    </section>
  );
};

export default Checkout;
