export const isValidEmail = (email: string) => {
  let text: string | null = null;
  const regexMask = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  if (!regexMask.test(email)) {
    text = "Email is not valid";
  }

  return text;
};

export const isValid = (email: string, password: string) => {
  let text: string | null = null;
  text = isValidEmail(email);

  if (!text) {
    text = isValidPassword(password);
  }

  return text;
};

export const isValidPassword = (password: string) => {
  let text: string | null = null;
  switch (true) {
    case password.length < 8:
      text = "Password less than 8 characters";
      break;
    case password && !/^[a-zA-Z0-9]+$/g.test(password):
      text = "Password must contain only latin letters and numbers";
      break;
    default:
      break;
  }

  return text;
};
