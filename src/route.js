import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,

} from "react-router-dom";
import Bcard from "./components/CountryCard/BcardDesing";
import ContactApp from "./components/contactAPP/contactApp";
import Parent1 from "./components/parent1";
import FormHandling from "./components/formHandling";
import ParentToChild from "./components/classBasedComp/parent";
import Condition from "./components/conditional_list_render/conditional_list_render";
import Digitalwatch from "./components/Digitalwatch";
import Home from './components/modules/layout/home'
import Employeeslist from './components/modules/employees/employeeslist'
import About from './components/modules/layout/about'
import Userlogin from './components/modules/users/userlogin'
import Userregister from './components/modules/users/userregister'
import Pagenotfound from "./components/modules/layout/pagenotfound";
import Student from "./components/student";
import Parent from "./components/parent";
import Functional from "./components/functional-component/functional";
import TableMapping from "./components/mapTheTable/TableMapping";
import RegisterForm from "./components/registerForm";
import Loginform from "./components/login/Loginform";
import List from "./components/List";
import EventHandel from "./components/eventHandle";
import CherryServer from "./components/serverConnection/cherryServer";
import Usereffff from "./components/Usereferr/Usereffff";

const AppRoutes = () => {
  return (
    <Router>
      {/* <Navbar /> */}
      <Routes>
        {/* <Route path="/event" element={<EventHandel />} /> */}
        <Route path="/bcard" element={<Bcard />} />
        <Route path="/event" element={<EventHandel />} />
        <Route path="/contactapp" element={<ContactApp />} />
        <Route path="/form" element={<FormHandling />} />
        <Route path="/childtoparent" element={<Parent1 />} />
        <Route path="/" element={<Home />} />
        <Route path="/employees/list" element={<Employeeslist />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/login" element={<Userlogin />} />
        <Route path="/users/register" element={<Userregister />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/student" element={<Student />} />
        <Route path="/render" element={<Condition />} />
        <Route path="/parent_to_child" element={<Parent />} />
        <Route path="/ParentToChild" element={<ParentToChild />} />
        <Route path="/digitalwatch" element={<Digitalwatch />} />
        <Route path="/functional" element={<Functional />} />
        <Route path="/tablemapping" element={<TableMapping />} />
        <Route path="/CherryServer" element={<CherryServer />} />
        <Route path="/registerform" element={<RegisterForm />} />
        <Route path="/loginfrom" element={<Loginform />} />
        <Route path="/listtable" element={<List />} />
        <Route path="/useref" element={<Usereffff />} />
      </Routes>
    </Router>
  );
};
export default AppRoutes;
