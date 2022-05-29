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

export const spotNameValidation: RegisterOptions = {
  required: {
    value: true,
    message: "Name is required",
  },
  minLength: {
    value: 5,
    message: "The name must have a minimum length of 5 characters.",
  },
  maxLength: {
    value: 100,
    message: "You have written a name that is too long, please make it shorter",
  },
};
export const spotDescriptionValidation: RegisterOptions = {
  required: {
    value: true,
    message: "Description is required",
  },
  minLength: {
    value: 5,
    message: "The description have a minimum length of 5 characters.",
  },
  maxLength: {
    value: 1000,
    message:
      "You have written a description that is too long, please make it shorter (under 1000 characters) ",
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
