import React from "react";
import { Button } from "@react-email/button";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";

interface EmailTemplateProps {
  firstname: string;
}

export const EmailSentConfirmation: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
}) => {
  return (
    <Html lang="en">
      <Container className="bg-slate-900 text-teal-500 rounded-md text-center">
        <h1 className="font-bold py-3">Hi Developer 🤗</h1>
        <Text className="font-bold my-5"> {firstname} has just registered</Text>

        <Button href="/">
          <span className="bg-white text-black ml-5 font-bold rounded-sm text-sm py-2 px-5">
            see full details...
          </span>
        </Button>
        <div className="my-8"></div>
      </Container>
    </Html>
  );
};
