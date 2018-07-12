import React from 'react';
import {Route} from 'react-router-dom';
import HomePage from "./components/pages/HomePage";
import LogInpage from "./components/pages/LogInPage";

const App = ()=><div className="ui container">
<Route path="/" exact component ={HomePage}/>
<Route path="/login" exact component = {LogInpage}/>
</div>;

export default App;
