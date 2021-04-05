interface IProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  label: string;
}

const Button = (props: IProps) => {
  const { disabled, label } = props;

  return (
    <button
      {...props}
      className={`px-3.5 ${props.className} inline-flex items-center focus:ring-2 focus:outline-none ring-offset-1 focus:ring-green-300 rounded py-2.5 font-medium text-sm text-white transition-all duration-300 ${
        !disabled
        ? `bg-green-500 hover:bg-green-600`
        : `bg-green-400 cursor-not-allowed`}`}
  > 
    <>
      <span>
        {label}
      </span>
    </>
  </button>
  )
}

export default Button;