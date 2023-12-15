interface IconTextProps {
  title: string;
  icon: string;
}

const IconText: React.FC<IconTextProps> = ({ title, icon }) => {
  return (
    <div className="flex items-center gap-2">
      <span className="material-symbols-outlined text-lg font-semibold text-primary">
        {icon}
      </span>
      <h4 className="text-gray-800 font-semibold">{title}</h4>
    </div>
  );
};

export default IconText;
