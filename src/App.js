// in src/App.js
import * as React from "react";
import { Admin } from 'react-admin';
import { dataProvider } from './firebase';

const App = () => <Admin dataProvider={dataProvider} />;

export default App;