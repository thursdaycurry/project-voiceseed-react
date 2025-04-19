import { useState } from "react";
import terms from "../metadata/terms.json";

export default function Playground() {
  const [inputText, setInputText] = useState("");

  const textInputHandler = (e) => {
    setInputText(e.target.value);
    console.log(inputText);
  };

  const [selectLang, setSelectLang] = useState("ko");

  return (
    <div className="p-[100px] flex flex-col items-center ">
      <div className="w-[500px] space-y-[15px]">
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
          <LanguageSelectBox
            languages={["ko", "en"]}
            selectLang={selectLang}
            setSelectLang={setSelectLang}
          />
        </div>

        <div>
          <button className="border w-full rounded-md bg-green-200 p-1 font-semibold">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
}

function LanguageSelectBox({ languages, selectLang, setSelectLang }) {
  return (
    <div className="flex space-x-[5px]">
      {languages.length
        ? languages.map((language) => (
            <LanguageButton
              language={language}
              selectLang={selectLang}
              setSelectLang={setSelectLang}
            />
          ))
        : "Languages are not supported"}
    </div>
  );
}

function LanguageButton({ language, selectLang, setSelectLang }) {
  return (
    <button
      className={`border p-1 hover:bg-gray-200 cursor-pointer text-sm rounded-md ${
        selectLang === language ? "bg-gray-300" : ""
      }`}
      onClick={() => setSelectLang(language)}
    >
      {terms.isoLang[language]}
    </button>
  );
}
