interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = (props) => {
  return (
    <div className="w-full">
      <div
        className={`max-w-7xl w-full max-md:px-5 px-10 mx-auto ${
          props.className ?? ""
        }`}
      >
        {props.children}
      </div>
    </div>
  );
};

export default Container;
