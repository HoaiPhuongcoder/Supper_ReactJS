import {
  createContext,
  memo,
  useCallback,
  useContext,
  useId,
  useMemo,
  useState,
} from "react";
import "./Welcome.css";

interface ThemeType {
  theme: {
    color: "light" | "dark";
  };
  onChangeTheme: (color: "light" | "dark") => void;
}

const ThemeContext = createContext<ThemeType>({
  theme: { color: "light" },
  onChangeTheme: () => {},
});



function Welcome() {
  const [theme, setTheme] = useState<ThemeType["theme"]>({
    color: "light",
  });

   // địa chỉ khác
  // Cái rerender   prevstate  === state

  const [, forceRender] = useState({});
  const onChangeTheme = useCallback((color: "light" | "dark") => {
    setTheme((prev) => ({ ...prev, color }));
  }, []);

  const valueContext = useMemo(() => {
    return { theme, onChangeTheme };
  }, [theme, onChangeTheme]);
  const pleaseRender = () => {
    forceRender({});
  };

  return (
    <div className="welcome">
      <ThemeContext.Provider value={valueContext}>
        <Form />
        <Label />
      </ThemeContext.Provider>
      <div>
        <button onClick={pleaseRender}>Render</button>
      </div>
    </div>
  );
}

const Label = memo(() => {
  const { theme, onChangeTheme } = useContext(ThemeContext);
  const id = useId();
  return (
    <div>
      <input
        id={id}
        type="checkbox"
        checked={theme.color === "dark"}
        onChange={(e) => onChangeTheme(e.target.checked ? "dark" : "light")}
      />
      <label htmlFor={id}>Use dark theme</label>
    </div>
  );
});

const Form = () => {
  return (
    <Panel title="Welcome">
      <Button>Sign Up</Button>
      <Button>Log In</Button>
    </Panel>
  );
};

const Panel = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  const themeContext = useContext(ThemeContext);
  const { theme } = themeContext;

  const className = "panel-" + theme?.color;
  return (
    <section className={className}>
      <h1>{title}</h1>
      {children}
    </section>
  );
};

const Button = ({ children }: { children: React.ReactNode }) => {
  const theme = { color: "light" };
  const className = "button-" + theme?.color;
  return <button className={className}>{children}</button>;
};

export default Welcome;
