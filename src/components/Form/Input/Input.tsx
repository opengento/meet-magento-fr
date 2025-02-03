import classNames from "classnames";

interface Input {
  variant: 'input' | 'textarea';
  type?: string;
  id?: string;
  name: string;
  required: boolean;
  placeholder?: string;
  value?: string;
  className?: string;
}

const Input = ({ variant, type = 'text', id, name, required, placeholder, value, className }: Input) => {
  const classHtml = classNames(
    'border rounded-md border-primary bg-white py-2 px-4 text-base font-normal',
    className
  );
  if (variant === 'textarea') {
    return (
      <textarea
        className={classHtml}
        id={id}
        name={name}
        required={required}
        placeholder={placeholder}
        rows={4}
      >
        {value}
      </textarea>
    );
  }

  return (
    <input className={classHtml} type={type} id={id} name={name} required={required} placeholder={placeholder} value={value}/>
  );
};

export default Input;
