const createUrl = hyperlinkText => {
  switch (hyperlinkText.toLowerCase()) {
    case "malta-times":
      return "https://www.timesofmalta.com";

    case "timesofmalta.com":
      return "https://www.timesofmalta.com";

    case "malta-independent":
      return "https://www.independent.com.mt";

    case "tvm-malta":
      return "https://www.tvm.com.mt";

    case "malta-today":
      return "https://www.maltatoday.com.mt";

    case "maltatoday.com.mt":
      return "https://www.maltatoday.com.mt";

    case "l-orizzont":
      return "https://www.inewsmalta.com";

    case "in-nazzjon":
      return "https://netnews.com.mt";

    case "il-mument":
      return "https://netnews.com.mt/tag/il-mument/";

    case "mument":
      return "https://netnews.com.mt/tag/il-mument/";

    default:
      return "";
  }
};

module.exports = createUrl;
