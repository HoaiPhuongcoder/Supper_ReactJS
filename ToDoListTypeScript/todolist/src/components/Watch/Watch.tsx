import { useEffect, useRef, useState } from "react";

function WatchTimer() {
  const [seconds, setSeconds] = useState<number>(0);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setSeconds((prev) => prev + 1);
      console.log("setInterval dang chay");
    }, 1000);
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      console.log("WatchTimer unmount");
    };
  }, []);
  return <div className="text-3xl text-center">Watch: {seconds}</div>;
}

function Watch() {
  const [visible, setVisible] = useState(true);
  const handleOnclick = () => {
    setVisible((prev) => !prev);
  };
  return (
    <div>
      <div className="flex justify-center">
        <button
          className="py-1 px-2 rounded-md bg-blue-400 text-white"
          onClick={handleOnclick}
        >
          Click Me
        </button>
      </div>
      {visible && <WatchTimer />}
    </div>
  );
}

export default Watch;
