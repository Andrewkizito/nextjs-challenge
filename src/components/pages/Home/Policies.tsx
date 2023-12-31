// UI Components
import { Fade } from "react-awesome-reveal";

// Types
import type { Policy } from "@/utils/types";

const Policies: React.FC<{ policies: Policy[] }> = ({ policies }) => {
  return (
    <div className="border-b border-gray-200 flex flex-col items-start gap-8 p-8">
      {policies.map((item, i) => (
        <Fade direction="up" key={i} delay={i * 200}>
          <div key={i}>
            <div className="flex items-center gap-2">
              <item.icon className="text-2xl text-primary" />
              <h4 className="text-gray-800 font-bold">{item.title}</h4>
            </div>
            <p className="text-gray-500 font-medium">{item.description}</p>
          </div>
        </Fade>
      ))}
    </div>
  );
};

export default Policies;
