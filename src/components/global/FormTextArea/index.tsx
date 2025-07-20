import { FormTextAreaProps } from '@/types';

const FormTextArea: React.FC<FormTextAreaProps> = ({
  placeholder,
  name,
  register,
  error,
}) => {
  const textareaId = `textarea-${name}`;
  const errorId = `error-${name}`;
  const isRequired = placeholder.includes('*');
  const labelText = placeholder.replace('*', '').trim();

  return (
    <div className="relative">
      <label htmlFor={textareaId} className="sr-only">
        {labelText}
        {isRequired && ' (required)'}
      </label>
      <textarea
        id={textareaId}
        placeholder={placeholder}
        className="form-textarea py-[10px] rounded-[10px] h-[100px] w-full resize-none border-2 border-solid border-app-400 bg-app-500 px-[10px] text-app-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        {...register(name)}
        aria-required={isRequired}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span 
          id={errorId}
          className="mt-[-5px] pl-[10px] text-[11px] font-bold text-red-400"
          role="alert"
          aria-live="polite"
        >
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormTextArea;
