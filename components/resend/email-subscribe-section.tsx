"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";

interface EmailSubscribeSectionProps {}

const EmailSubscribeSection: React.FC<EmailSubscribeSectionProps> = ({}) => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setIsValidEmail(validateEmail(inputEmail));
  };

  const handleSubscribeClick = async () => {
    if (isValidEmail) {
      setIsLoading(true);
      try {
        // Simulate asynchronous action (e.g., fetching data from server)
        await new Promise((resolve) => setTimeout(resolve, 2000));
        // Perform server action call here
        // Example: fetch(`/api/sendEmail?email=${email}`)
        alert(`Subscribing with email: ${email}`);
        setIsLoading(false); // Move this line here to ensure it's set even in case of an error
        toast({
          title: "you are subbed.",
          description: "check your email for a welcome!",
        });
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred while subscribing.");
        setIsLoading(false); // Set loading state to false in case of error
      }
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <div>
      <div className="mt-8 z-10 mix-blend-multiply">
        <div className="mb-8">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <Button
          className="w-1/2"
          onClick={handleSubscribeClick}
          disabled={!isValidEmail || isLoading}
        >
          {isLoading ? (
            <>
              <span className="mr-2 h-4 w-4 animate-spin">
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
              </span>
              Please wait...
            </>
          ) : (
            "Subscribe"
          )}
        </Button>
      </div>
    </div>
  );
};

export default EmailSubscribeSection;
