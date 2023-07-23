import ReactMarkdown from "react-markdown";
import { RootState } from "../app/store";
import "./scss/Console.scss";
import { useSelector } from "react-redux";

const Console = () => {
  const explain = useSelector((state: RootState) => state.explain.content);
  const isFetched = useSelector((state: RootState) => state.explain.isFetched);

  return (
    <div className="console">
      <div className="heading">Console</div>

      <div className="console-body">
        {explain && isFetched && <ReactMarkdown>{explain}</ReactMarkdown>}
      </div>
    </div>
  );
};

export default Console;
