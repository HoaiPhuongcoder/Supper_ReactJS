import { memo, useRef } from "react";
import styles from "./title.module.scss";

type TitleProps = {
  address: {
    street: string;
  };
  handleClickTitle: (value: unknown) => void;
};

function Title({ address }: TitleProps) {
  // handleClickTitle(address);
  // const [color, setColor] = useState<string | undefined>(undefined);
  const h1Ref = useRef<HTMLHeadingElement>(null);

  const clickH1 = () => {
    if (h1Ref.current) {
      h1Ref.current.style.color = "red";
    }
    // setColor("red");
    // console.log(h1Ref);
  };
  return (
    <h1 className={styles.title} ref={h1Ref} onClick={clickH1}>
      To do list typescript {address.street}
    </h1>
  );
}

export default memo(Title);
