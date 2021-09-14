import { StrictMode } from "react";
import ReactDOM from "react-dom";
import { Provider as StyletronProvider, DebugEngine } from "styletron-react";
import { Client as Styletron } from "styletron-engine-atomic";
import { BaseProvider, LightTheme } from "baseui";
import App from "./App";
import { createStore } from "redux";

const engine = new Styletron();
const debug =
  process.env.NODE_ENV === "production" ? void 0 : new DebugEngine();

// const store = createStore();

const rootElement = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    <StyletronProvider value={engine} debug={debug} debugAfterHydration>
      <BaseProvider theme={LightTheme}>
        <StrictMode>
          <App />
        </StrictMode>
      </BaseProvider>
    </StyletronProvider>,
    rootElement
  );
};
render();
