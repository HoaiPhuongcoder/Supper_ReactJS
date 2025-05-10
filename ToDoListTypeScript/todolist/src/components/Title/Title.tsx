import { memo } from "react";
import styles from "./title.module.scss";

type TitleProps = {
  address: {
    street: string;
  };
};

function Title({ address }: TitleProps) {
  console.log(address);
  return <h1 className={styles.title}>To do list typescript</h1>;
}

function equal(prevProp: TitleProps, nextProps: TitleProps) {
  if (prevProp.address.street === nextProps.address.street) {
    return true;
  }
  return false;
}

export default memo(Title, equal);
