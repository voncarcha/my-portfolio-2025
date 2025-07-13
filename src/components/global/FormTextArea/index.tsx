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
      className="form-textarea h-[100px] w-full resize-none rounded-[10px] border-2 border-solid border-[#e2e9ed] bg-transparent p-[10px] max-md:h-[200px]"
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
