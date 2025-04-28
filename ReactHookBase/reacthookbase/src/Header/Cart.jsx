import useUser from "../useUser.jsx";

function Cart() {
  // const [user, setUser] = useState();
  // useEffect(() => {
  //   getUser().then((res) => {
  //     setUser(res.data);
  //   });
  // }, []);
  const [user] = useUser({});
  return <div>Cart {user?.name}</div>;
}

export default Cart;
