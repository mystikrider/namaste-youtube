
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";

/**
 * 
 * @returns 
 */
function App() {
  
  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
