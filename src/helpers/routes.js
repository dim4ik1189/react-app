import FormComponents from '../components/FormComponents';
import UsersTable from "../components/UsersTable";
import MyForm from '../components/MyForm';
import Lesson7 from '../components/Lesson7';
import HrefList from '../components/HrefList';
import Lesson8_2 from '../components/Lesson8_2'
import Lesson8_3 from '../components/Lesson8_3'
import Lesson8_4 from '../components/Lesson8_4'
import Lesson8_5 from '../components/Lesson8_5'
import Lesson8_6 from '../components/Lesson8_6'
import Clock from '../components/Clock';
import SimpleForm from '../components/SimpleForm';
import UsersTableOnHooks from '../components/UsersTableOnHooks';
import ClockOnHooks from '../components/ClockOnHooks';

import FetchingDynamicData from '../components/FetchingDynamicData'
import MagicEightBall from '../components/MagicEightBall'
import { possibleAnswers, messages } from './possibleAnswers'


export const routes = [
    { path: "/comps", component: FormComponents, customProps: null },
    { path: "/table", component: UsersTable, customProps: null },
    { path: "/myform", component: MyForm, customProps: null },
    { path: "/lesson-7", component: Lesson7, customProps: null },
    { path: "/hrefList", component: HrefList, customProps: null },
    { path: "/lesson8_2", component: Lesson8_2, customProps: null },
    { path: "/lesson8_3", component: Lesson8_3, customProps: null },
    { path: "/lesson8_4", component: Lesson8_4, customProps: null },
    { path: "/lesson8_5", component: Lesson8_5, customProps: null },
    { path: "/lesson8_6", component: Lesson8_6, customProps: messages },
    { path: "/CSS_Clock", component: Clock, customProps: null },
    { path: "/fetching-dynamic-data", component: FetchingDynamicData, customProps: null },
    { path: "/magic-eight-ball", component: MagicEightBall, customProps: possibleAnswers },
    { path: "/Simple-Form", component: SimpleForm, customProps: null },
    { path: "/Table-on-hooks", component: UsersTableOnHooks, customProps: null },
    { path: "/Clock-on-hooks", component: ClockOnHooks, customProps: null },
];

export const paths = routes.map(({path}) => ({path})); // extracting paths for App component
