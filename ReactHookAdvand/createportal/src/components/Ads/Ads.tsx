import websiteUI from "../../images/ian-mywife.jpg";
import { withMouseTracker } from "../MouseTracker/MouseTracker";

function Ads({ x, y, visible }: { x: number; y: number; visible: boolean }) {
  return (
    <div style={!visible ? { display: "none" } : {}}>
      <img
        src={websiteUI}
        alt="Ian"
        style={{ width: "20rem", height: "auto" }}
      />
      <p>position Mouse</p>
      <ul>
        <li>x: {x}</li>
        <li>y: {y}</li>
      </ul>
    </div>
  );
}

export default withMouseTracker(Ads);
