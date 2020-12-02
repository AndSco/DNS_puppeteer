import React from "react";
import { CredentialsForm } from "../components/CredentialsForm";
import ScreenView from "../components/ScreenView";
import PageHeader from "../components/PageHeader";
import Paragraph from "../components/Paragraph";

export const EcasAuthentication = () => {
  return (
    <ScreenView>
      <PageHeader title="ECAS CREDENTIALS" auth />
      <Paragraph text="Enter the ECAS credentials used to access the EC services. Make sure they're correct, since they'll be used for all following operations" />
      <CredentialsForm />
    </ScreenView>
  );
};
