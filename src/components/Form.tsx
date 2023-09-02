/* eslint-disable react-hooks/rules-of-hooks */
import "./scss/Form.scss";
import { useState, FC } from "react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import parseLink from "../utils/parseLink";
import useFetchFiles from "../hooks/useFetchFiles";
import { useDispatch } from "react-redux";
import { setData } from "../features/data/dataSlice";
import { setCode } from "../features/code/codeSlice";
import sortByType from "../utils/sortByType";
import { AiOutlineArrowRight } from "react-icons/ai";

interface FormProps {
  type: "repo" | "code";
}

const Form: FC<FormProps> = ({ type }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setValue(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "repo") {
      const [owner, repo] = parseLink(value);
      dispatch(setCode("// Click on files on your left side."));

      try {
        const data = await useFetchFiles(owner, repo);

        if (!data) return;

        const sortedData = sortByType(data);

        dispatch(
          setData({
            type: "repo",
            content: sortedData,
            repoData: {
              owner,
              repo,
            },
          })
        );

        return navigate(`/explain/${repo}`);
      } catch (error) {
        console.error(error);
      }
    }

    if (type === "code") {
      dispatch(
        setData({
          type: "code",
          content: value,
        })
      );

      return navigate(`/explain/code`);
    }
  };

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <form onSubmit={(e) => handleSubmit(e)}>
      {type === "repo" ? (
        <>
          <input
            type="text"
            placeholder="Repository URL"
            value={value}
            onChange={(e) => onChange(e)}
            required
          />
          <Button className="inputButton">
            <AiOutlineArrowRight />
          </Button>
        </>
      ) : (
        <>
          <textarea
            cols={30}
            rows={10}
            value={value}
            onChange={(e) => onChange(e)}
            placeholder="Paste your beautiful code here"
            required
          ></textarea>
          <Button className="">Submit</Button>
        </>
      )}
    </form>
  );
};

export default Form;
