import useUser from "../useUser.jsx";

function Navigation() {
  //   const [user, setUser] = useState();
  //   useEffect(() => {
  //     getUser().then((res) => {
  //       setUser(res.data);
  //     });
  //   }, []);
  const [user] = useUser({});

  return <div>Navigation {user?.name}</div>;
}

export default Navigation;
