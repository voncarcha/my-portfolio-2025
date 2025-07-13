import { FormTextFieldProps } from '@/types';

const FormTextField: React.FC<FormTextFieldProps> = ({
  type,
  placeholder,
  name,
  register,
  error,
}) => (
  <div className="relative">
    <input
      type={type}
      placeholder={placeholder}
      {...register(name)}
      className="form-text h-[50px] w-full rounded-[10px] border-2 border-solid border-app-400 bg-app-500 px-[10px] text-app-100"
    />
    {error && (
      <span className="pl-[10px] text-[11px] font-bold text-red-400">
        {error.message}
      </span>
    )}
  </div>
);
export default FormTextField;
