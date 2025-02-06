import Label from "@/components/Form/Label/Label";
import Input from "@/components/Form/Input/Input";
import classNames from "classnames";

interface Field {
  variant?: 'input' | 'textarea';
  label: string;
  labelPosition?: 'left' | 'right' | 'top'
  id?: string;
  name: string;
  type?: string;
  required: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
}

const wrapperClass = {
  left: 'flex flex-row',
  right: 'flex flex-row-reverse justify-end',
  top: 'flex flex-col'
}
const labelClass = {
  left: 'mr-2',
  right: 'ml-2',
  top: 'block mb-2'
};
const inputClass = {
  left: '',
  right: '',
  top: 'block w-full'
};

const Field = ({
  variant = 'input',
  label,
  labelPosition = 'top',
  id,
  name,
  type,
  required,
  placeholder,
  value,
  className
}: Field) => {
  return (
    <div className={classNames(wrapperClass[labelPosition], className)}>
      <Label required={required} id={id} className={labelClass[labelPosition]}>
        {label}
      </Label>
      <Input
        variant={variant}
        type={type}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        value={value}
        className={inputClass[labelPosition]}
      />
    </div>
  );
};

export default Field;
