// Types
import { IconType } from "react-icons";

interface IconTextProps {
  title: string;
  icon: IconType;
}

const IconText: React.FC<IconTextProps> = (props) => {
  return (
    <div className="flex items-center gap-2">
      <props.icon className="text-lg font-semibold text-primary" />
      <h4 className="text-gray-800 font-semibold">{props.title}</h4>
    </div>
  );
};

export default IconText;
