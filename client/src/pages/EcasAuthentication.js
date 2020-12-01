import React from "react";
import { CredentialsForm } from "../components/CredentialsForm";
import ScreenView from "../components/ScreenView";
import PageHeader from "../components/PageHeader";

export const EcasAuthentication = () => {
  return (
    <ScreenView>
      <PageHeader title="ECAS CREDENTIALS" icon="faNewspaper" />
      <CredentialsForm />
    </ScreenView>
  );
};
