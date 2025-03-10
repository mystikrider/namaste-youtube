
import Body from "./components/Body";
import Header from "./components/Header";
import { Provider } from "react-redux";
import appStore from "./utils/store/appStore";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import WatchPage from "./components/WatchPage";
import MainContainer from "./components/MainContainer";
import Demo from "./components/Demo";
import Demo2 from "./components/Demo2";

/**
 * 
 * @returns 
 */

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "/watch",
        element: <WatchPage />
      },
      {
        path: "/demo",
        element: <>
          <Demo />
          <Demo2 />
        </>
      }
    ]
  }
])

function App() {

  return (
    <div>
      <Provider store={appStore}>
        <Header />
        <RouterProvider router={appRouter} />
      </Provider>
    </div>
  );
}

export default App;
