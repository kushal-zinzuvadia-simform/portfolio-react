export type FormData = {
  name: string;
  email: string;
  contactNo: string;
  message: string;
};

export type FormErrors = Partial<Record<keyof FormData, string>>;
