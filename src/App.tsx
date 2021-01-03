import React from "react";
import ListingPage from "./components/ListingPage";
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

// eslint-disable-next-line
const App = () => {
  return (
    <Provider store={store}>
      <ListingPage />
    </Provider>
  );
};

export default App;
