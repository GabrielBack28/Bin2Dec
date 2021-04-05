interface IProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
  type?: string;
  label?: string;
  required?: boolean;
  modelValue?: string;
  placeholder?: string;
  disabled?: boolean;
}

const Input = (props: IProps) => {
  const { disabled, type, label, required, placeholder } = props;
  return (
    <div className="flex flex-col">
      {
        label ?? (
          <span className="mb-2 text-sm font-medium">{label}</span>
        )
      }
      <input
        {...props}
        disabled={disabled}
        required={required}
        placeholder={placeholder}
        type={type}
        className="px-3 py-2.5 text-sm font-light border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-axe-100 focus:border-transparent"
      />
      
    </div>
  )
}

export default Input;