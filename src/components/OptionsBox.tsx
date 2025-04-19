export default function OptionsBox({ options, optionHandler }) {
  const { getter, setter } = optionHandler;
  return (
    <div className={`flex space-x-[7px]`}>
      {options.length &&
        options.map((option) => (
          <div
            className={`cursor-pointer rounded-md border py-1 px-2 ${
              getter == option ? "bg-gray-100" : ""
            }`}
            onClick={() => setter(option)}
          >
            {option}
          </div>
        ))}
    </div>
  );
}
