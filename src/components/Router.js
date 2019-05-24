import { BrowserRouter, Route, Switch } from 'react-router-dom';
import React from 'react';
import App from './App';
import FormComponents from './FormComponents';
import UsersTable from "./UsersTable";
import MyForm from './MyForm';
import Lesson7 from './Lesson7';
import HrefList from './HrefList';
import Lesson8_2 from './Lesson8_2'
import Lesson8_3 from './Lesson8_3'
import Lesson8_4 from './Lesson8_4'
import Lesson8_5 from './Lesson8_5'
import FetchingDynamicData from './FetchingDynamicData'

const Router = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App}/>
            <Route path="/comps" component={FormComponents}/>
            <Route path="/table" component={UsersTable}/>
            <Route path="/myform" component={MyForm}/>
            <Route path="/lesson-7" component={Lesson7}/>
            <Route path="/hrefList" component={HrefList}/>
            <Route path="/lesson8_2" component={Lesson8_2}/>
            <Route path="/lesson8_3" component={Lesson8_3}/>
            <Route path="/lesson8_4" component={Lesson8_4}/>
            <Route path="/lesson8_5" component={Lesson8_5}/>
            <Route path="/lesson8_5" component={Lesson8_5}/>
            <Route path="/fetching-dynamic-data" component={FetchingDynamicData}/>

        </Switch>
    </BrowserRouter>
);

export default Router;