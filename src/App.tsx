import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { Provider } from "react-redux";
import store from "./redux-store/redux-store";

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={routes}></RouterProvider>
    </Provider>
  );
}

export default App;
