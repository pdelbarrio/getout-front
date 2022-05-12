import { RegisterOptions } from "react-hook-form";

export const passwordRegex = /^(?:(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).*)$/;

export const usernameValidation: RegisterOptions = {
  required: {
    value: true,
    message: "username is required",
  },
};

export const emailValidation: RegisterOptions = {
  required: {
    value: true,
    message: "email is required",
  },
};

export const requiredValidation: RegisterOptions = {
  required: {
    value: true,
    message: "this field is required",
  },
};

export const passwordValidation: RegisterOptions = {
  required: {
    value: true,
    message: "password is required.",
  },
  minLength: {
    value: 8,
    message: "Password must have a minimum length of 8 characters.",
  },
  pattern: {
    value: passwordRegex,
    message:
      "The field must have 1 uppercase, 1 lowercase and at least 1 number.",
  },
};
