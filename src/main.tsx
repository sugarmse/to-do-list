import React from "react";
import ReactDOM from "react-dom";
import App from "./App.tsx";
import "./index.css";
import { Provider } from "react-redux";
import { store, persistor } from "./state/store.ts"; // Import persistor
import { PersistGate } from "redux-persist/integration/react";

// Use ReactDOM.render instead of ReactDOM.createRoot.render
ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</PersistGate>
	</Provider>,
	document.getElementById("root")
);
