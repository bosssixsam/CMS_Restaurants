export interface IButton {
  className?: string;
  children?: string | number | JSX.Element;
  disabled?: boolean;
  loading?: boolean;
  handleClick?: (e: any) => void;
}

const Button = ({ className = "", disabled, loading, children, handleClick }: IButton) => {
  return (
    <button className={`${className} rounded-md`} disabled={disabled ? disabled : loading} onClick={handleClick}>
      {children}
    </button>
  );
};

export default Button;
