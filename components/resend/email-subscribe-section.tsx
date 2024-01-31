"use client";
import * as React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ReloadIcon } from "@radix-ui/react-icons";
import { useToast } from "@/components/ui/use-toast";
import addContactToList from "@/actions/sendgrid/addContactToList";
import singleSend from "@/actions/sendgrid/createSingleSend";

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

  async function handleSubscribeClick(email: string) {
    if (isValidEmail) {
      setIsLoading(true);
      try {
        await addContactToList(email);

        // await singleSend(email);

        toast({
          title: "you're in!",
          description: "welcome builder.",
        });
      } catch (error) {
        console.error("Error:", error);
        toast({
          title: "Something went wrong.",
          description: "Please try again later.",
        });
      } finally {
        setIsLoading(false);
      }
    } else {
      console.error("Please enter a valid email address.");
      toast({
        title: "Invalid Email Address",
        description: "Please enter a valid email address.",
      });
    }
  }

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
          onClick={() => handleSubscribeClick(email)}
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
