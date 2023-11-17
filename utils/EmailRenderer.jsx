const EmailRenderer = (firstname) => {
  // send mail with defined transport
  const emailHtml = render(<EmailTemplate firstname={firstname} />);

  return { emailHtml };
};

export default EmailRenderer;
