interface BackdropProps extends React.HTMLAttributes<HTMLDivElement> {
  open: boolean;
}

const Backdrop: React.FC<BackdropProps> = ({ open, ...rest }) => {
  return (
    <div
      className={`fixed bg-black bg-opacity-50 w-full h-full duration-500  z-30 ${
        open ? "opacity-100" : "opacity-0 invisible"
      }`}
      {...rest}
    />
  );
};

export default Backdrop;
