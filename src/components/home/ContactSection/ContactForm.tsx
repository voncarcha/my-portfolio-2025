'use client';

import { useForm } from 'react-hook-form';
import useGlobalStore from '@/hooks/useGlobalStore';
import { ContactFormData } from '@/types';
import { ContactFormSchema } from '@/types';
import sendEmail from '@/actions/sendEmail';
import { zodResolver } from '@hookform/resolvers/zod';
import FormTextField from '@/components/global/FormTextField';
import { useState } from 'react';
import FormTextArea from '@/components/global/FormTextArea';

const ContactForm = () => {
  const [isLoading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(ContactFormSchema),
  });
  const { setContactSuccess } = useGlobalStore();

  const onSubmit = async (data: ContactFormData) => {
    setLoading(true);
    const payload = data;

    const response = await sendEmail(payload);

    if (response.success) {
      setContactSuccess(true);
      reset();
    } else {
      alert(response?.message || 'Something went wrong');
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-[20px]"
      aria-label="Contact form"
    >
      <fieldset className="flex flex-col gap-[10px] border-0">
        <legend className="sr-only">Contact Information</legend>
        <FormTextField
          type="text"
          placeholder="*Name"
          name="name"
          register={register}
          error={errors.name}
        />
        <FormTextField
          type="email"
          placeholder="*Email"
          name="email"
          register={register}
          error={errors.email}
        />
        <FormTextArea
          placeholder="*Message"
          name="message"
          register={register}
          error={errors.message}
        />
      </fieldset>
      <div className="flex justify-end">
        <button
          type="submit"
          className={`${
            isLoading
              ? 'cursor-not-allowed bg-slate-900'
              : 'bg-gradient-app-vertical hover:bg-gradient-app-hover focus:ring-2 focus:ring-primary focus:ring-opacity-50'
          } h-[50px] w-full md:w-[200px] rounded-[10px] text-[20px] font-bold text-white shadow-xl focus:outline-none`}
          disabled={isLoading}
          aria-describedby={isLoading ? 'loading-status' : undefined}
        >
          {isLoading ? 'Sending...' : 'Send'}
          {isLoading && (
            <span id="loading-status" className="sr-only">
              Please wait, your message is being sent
            </span>
          )}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
