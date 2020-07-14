import React from "react";
import Input from "./Input";

const DnsItemsNumberForm = ({ closeNewsIndexForm }) => {

  return (
    <Input
      inputExplanation="Enter the news indexes, comma-separated"
      type="text"
      functionOnSubmit={closeNewsIndexForm}
      buttonText="continue"
    />
  );
};


export default DnsItemsNumberForm;