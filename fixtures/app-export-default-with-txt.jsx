import React from "react";
import { webViewRender } from "react-native-react-bridge/lib/web";
import Comp from "./Component";
import data from "./example.txt";

alert(data);

const App = () => {
  return <Comp />;
};

export default webViewRender(<App />);
