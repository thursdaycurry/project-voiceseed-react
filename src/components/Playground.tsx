import { useEffect, useState } from "react";
import terms from "../metadata/terms.json";
import textSamples from "../metadata/sample.json";
import OptionsBox from "./OptionsBox";

export default function Playground() {
  const [inputText, setInputText] = useState("");

  const textInputHandler = (e) => {
    setInputText(e.target.value);
  };

  const [selectLang, setSelectLang] = useState("ko");
  const selectHandler = {
    getter: selectLang,
    setter: (value) => setSelectLang(value),
  };

  const [selectSample, setSelectSample] = useState("blank");
  const sampleHander = {
    getter: selectSample,
    setter: (value) => setSelectSample(value),
  };

  const submitHandler = () => {
    console.log("submitted");
  };

  useEffect(() => {
    if (selectSample !== "blank") {
      const newText: string = textSamples.text?.[selectSample];
      setInputText(newText);
    } else {
      setInputText("");
    }
  }, [selectSample]);

  return (
    <div className="p-[100px] flex flex-col items-center ">
      <div className="w-[500px] space-y-[35px]">
        <div>
          <div>Text to Speech</div>
          <div>
            <textarea
              name="voices"
              className=" w-full border bg-gray-50 rounded-md h-[300px] p-2"
              value={inputText || ""}
              onChange={textInputHandler}
              placeholder="오디오로 변환할 글을 입력하세요."
            />
          </div>
          <div className="text-sm">
            <div>Sample</div>
            <div>
              <OptionsBox
                options={textSamples.list}
                optionHandler={sampleHander}
              />
            </div>
          </div>
        </div>

        <div>
          <div>API key</div>
          <input
            className="border rounded-md w-full bg-gray-50 text-sm p-1"
            type="text"
            id="input_api"
            placeholder="your own OpenAI API key"
            required
          />
          <div className="text-[12px] ">We don't save your API key!!</div>
        </div>

        <div>
          <div>Language</div>

          <OptionsBox
            options={terms.isoLang?.["list"]}
            optionHandler={selectHandler}
          />
        </div>

        <div>
          <button
            onClick={submitHandler}
            className="border w-full rounded-md bg-green-200 p-1 font-semibold cursor-pointer"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}
