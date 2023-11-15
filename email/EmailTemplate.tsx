import React from "react";
import { Html } from "@react-email/html";
import { Text } from "@react-email/text";
import { Container } from "@react-email/container";
import {
  FaWhatsapp,
  FaFacebookF,
  FaInstagram,
  FaTelegram,
} from "react-icons/fa";

interface EmailTemplateProps {
  firstname: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstname,
}) => {
  return (
    <Html>
      <Container className="px-8 mx-8 my-8">
        <h1 className="font-bold">Hello, {firstname} 👋</h1>
        <Text> Thank you for Registering for Sexual Purity 4.0 </Text>
        <Text>It promises to be value-packed. Save the date.</Text>

        <Text>
          Best Regards,
          <br />
          <span className=" font-bold text-lipstick">Team Sexual Purity</span>
        </Text>
        <div className="flex gap-2 my-4 ">
          <FaWhatsapp />
          <FaFacebookF />
          <FaInstagram />
          <FaTelegram />
        </div>
      </Container>
    </Html>
  );
};
