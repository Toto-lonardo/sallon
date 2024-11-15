import * as React from "react";
import { ContactEmailProps } from "../app/api/utils/mailInterface";

// TODO: Create email Template

export const EmailTemplate: React.FC<Readonly<ContactEmailProps>> = ({
  firstName = "Nome",
  lastName = "Cognome",
  email = "prova@prova.it",
  subject = "Oggetto",
  message = "Messaggio di prova",
}) => (
  <div>
    <h1>
      {firstName} {lastName} has sent this message:!
    </h1>
    <p>{subject}</p>
    <p>{message}</p>
    <p>{email}</p>
  </div>
);
