import "./scss/Popup.scss";
import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReactMarkdown from "react-markdown";

interface PopupProps {
  position: { top: number; left: number };
  explainedText: string;
  setExplained: React.Dispatch<React.SetStateAction<string>>;
  setShowPopup: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popup: FC<PopupProps> = ({
  position,
  explainedText,
  setExplained,
  setShowPopup,
}) => {
  const handleClose = () => {
    setExplained("");
    setShowPopup(false);
  };

  return (
    <div
      className="popup"
      style={{
        top: position.top,
        left: position.left,
      }}
    >
      <span onClick={handleClose} className="close">
        <AiOutlineClose size={24} />
      </span>

      {explainedText ? (
        <ReactMarkdown>{explainedText}</ReactMarkdown>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Popup;
