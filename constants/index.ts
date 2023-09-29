export const navbarButtons = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Case Studies",
    path: "/case-studies",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const inputFields = [
  {
    label: "What's your name?",
    input: true,
    email: false,
    inputName: "user_name",
    errorMessage: "Name is required",
    marginTop: false,
  },
  {
    label: "What's your email",
    input: true,
    email: true,
    inputName: "user_email",
    errorMessage: "Invalid email format",
    marginTop: true,
  },
  {
    label: "Write something about your project goals and timeframe",
    input: false,
    email: false,
    inputName: "message",
    errorMessage: "Message should be at least 20 characters long",
    marginTop: true,
  },
  {
    label: "How to reach out to you back?",
    input: false,
    email: false,
    inputName: "contact_info",
    errorMessage: "Contact information is required",
    marginTop: true,
  },
];
