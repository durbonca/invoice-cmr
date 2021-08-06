// in src/App.js
import * as React from "react";
import { Admin } from 'react-admin';
import { dataProvider, authProvider } from './firebase';
import LoginPage from './LoginPage';

const App = () => <Admin loginPage={LoginPage} authProvider={authProvider} dataProvider={dataProvider} ><p>holis</p></Admin>;

export default App;