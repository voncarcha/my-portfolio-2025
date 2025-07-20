import { FormTextAreaProps } from '@/types';

const FormTextArea: React.FC<FormTextAreaProps> = ({
  placeholder,
  name,
  register,
  error,
}) => (
  <div className="relative">
    <textarea
      placeholder={placeholder}
      className="form-textarea py-[10px] rounded-[10px] h-[100px] w-full resize-none border-2 border-solid border-app-400 bg-app-500 px-[10px] text-app-100"
      {...register(name)}
    />
    {error && (
      <span className="mt-[-5px] pl-[10px] text-[11px] font-bold">
        {error.message}
      </span>
    )}
  </div>
);
export default FormTextArea;
