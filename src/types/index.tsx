import { FieldError, UseFormRegister } from 'react-hook-form';
import { ZodType, z } from 'zod';

export type ContactFormData = {
  name: string;
  email: string;
  message: string;
};

export type FormTextFieldProps = {
  type: string;
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<ContactFormData>;
  error: FieldError | undefined;
};

export type FormTextAreaProps = {
  placeholder: string;
  name: ValidFieldNames;
  register: UseFormRegister<ContactFormData>;
  error: FieldError | undefined;
};

export type ValidFieldNames =
  | 'name'
  | 'email'
  | 'message';

export const ContactFormSchema: ZodType<ContactFormData> = z.object({
  name: z.string().min(1, { message: 'Full Name is required' }),
  email: z
    .string()
    .min(1, { message: 'Email is required' })
    .email({ message: 'Must be a valid email' }),
  message: z.string().min(1, { message: 'Message is required' }).max(1000),
});
