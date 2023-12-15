interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  variant: "primary" | "plain";
}

const Button: React.FC<ButtonProps> = ({ variant, ...rest }) => {
  let styles = "bg-white border border-gray-200 text-gray-600 hover:bg-gray-200";

  if (variant === "primary") {
    styles = "bg-primary text-white hover:bg-opacity-50";
  }

  return <button className={`py-2 px-5 rounded-md duration-300 text-semibold ${styles}`} {...rest} />;
};

export default Button;
