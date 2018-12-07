import React from "react";
import { BrowserRouter, Router, Route, Switch} from 'react-router-dom';
//import App from "../components/App";
import HomePage from "../components/home/HomePage";
import AboutPage from "../components/about/AboutPage";
import CoursesPage from "../components/course/CoursesPage";
import ManageCoursePage from "../components/course/ManageCourse";
import Header from "../components/common/Header"
import history from "../history";
const AppRoutes = () => {
    return (
      <BrowserRouter>
        <Router history={history}>
          <div className="container">
            <Header />
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact  path="/about" component={AboutPage}/>
                <Route exact path="/course/:id" component={ManageCoursePage}/>
                <Route exact path="/courses" component={CoursesPage}/>
            </Switch>
          </div>
        </Router>
      </BrowserRouter>
    );
  };
export default AppRoutes;

