import {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";

const Input = forwardRef<{ type: () => void }>((props, ref) => {
  console.log(props);

  const [value, setValue] = useState<string>("");
  const inputRef = useRef<HTMLInputElement>(null);
  const type = () => {
    let numberIndex = 0;
    const initialString = "Nguyễn Hoài Phương";
    inputRef.current?.focus();

    const interval: number = setInterval(() => {
      setValue(initialString.slice(0, numberIndex));
      if (numberIndex === initialString.length) {
        return clearInterval(interval);
      }
      numberIndex++;
    }, 100);
  };
  useImperativeHandle(ref, () => {
    return {
      type,
    };
  });

  useEffect(() => {
    type();
  }, []);
  return (
    <div>
      <input
        type="text"
        placeholder="type something"
        value={value}
        onChange={() => {}}
        ref={inputRef}
      />
    </div>
  );
});

function AutoInput() {
  const funcInputRef = useRef<{ type: () => void }>(null);
  const handleClick = () => {
    funcInputRef.current?.type();
  };
  return (
    <div>
      <div>
        <button onClick={handleClick}>Click to type</button>
      </div>
      <Input ref={funcInputRef} />
    </div>
  );
}

export default AutoInput;
