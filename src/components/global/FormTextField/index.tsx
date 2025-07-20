import { FormTextFieldProps } from '@/types';

const FormTextField: React.FC<FormTextFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => {
  const inputId = `input-${name}`;
  const errorId = `error-${name}`;
  const isRequired = placeholder.includes('*');
  const labelText = placeholder.replace('*', '').trim();

  return (
    <div className="relative">
      <label htmlFor={inputId} className="sr-only">
        {labelText}
        {isRequired && ' (required)'}
      </label>
      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        {...register(name)}
        className="form-text h-[50px] w-full rounded-[10px] border-2 border-solid border-app-400 bg-app-500 px-[10px] text-app-100 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
        aria-required={isRequired}
        aria-invalid={error ? 'true' : 'false'}
        aria-describedby={error ? errorId : undefined}
      />
      {error && (
        <span 
          id={errorId}
          className="pl-[10px] text-[11px] font-bold text-red-400"
          role="alert"
          aria-live="polite"
        >
          {error.message}
        </span>
      )}
    </div>
  );
};

export default FormTextField;
