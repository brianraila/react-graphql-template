import React from "react";
import ReactDOM from "react-dom";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import App from "./App";

const client = new ApolloClient({
  uri: "https://7sgx4.sse.codesandbox.io"
});

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>,
  rootElement
);
