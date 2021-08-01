import NewUser from "./Component/NewUser"
import RegisterTutor from "./Component/RegisterTutor"
import RegisterStudent from "./Component/RegisterStudent"
import SigninPage from "./Component/SigninPage"
import RootReducer from "./Component/RootReducer"
import TutorDashBoard from "./Component/TutorDashBoard"
import StudentDashBoard from "./Component/StudentDashBoard"
import ForOldUser from "./Component/ForOldUser"
import DisplayStudentReq from "./Component/DisplayStudentReq"
import DisplayMyStudent from "./Component/DisplayMyStudent"
import DisplayAllTutor from "./Component/DisplayAllTutor"
import DisplayTutorReq from "./Component/DisplayTutorReq"
import DisplayMyTutor from "./Component/DisplayMyTutor"
import FigmaUi from "./Component/FigmaUi"
import {BrowserRouter as Router,Route} from "react-router-dom"

function App(props) {
  return (
    <div>
      <Router>

        <Route
        strict
        exact
        component={NewUser}
        path="/newuser"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={RegisterTutor}
        path="/registertutor"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={RegisterStudent}
        path="/registerstudent"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={SigninPage}
        path="/signinpage"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={RootReducer}
        path="/rootreducer"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={TutorDashBoard}
        path="/tutordashboard"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={StudentDashBoard}
        path="/studentdashboard"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={ForOldUser}
        path="/forolduser"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={DisplayStudentReq}
        path="/displaystudentreq"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={DisplayMyStudent}
        path="/displaymystudent"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={DisplayAllTutor}
        path="/displayalltutor"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={DisplayTutorReq}
        path="/displaytutorreq"
        history={props.history}>
        </Route>

        <Route
        strict
        exact
        component={DisplayMyTutor}
        path="/displaymytutor"
        history={props.history}>
        </Route>

       <Route
        strict
        exact
        component={FigmaUi}
        path="/figmaui"
        history={props.history}>
        </Route>




        </Router>
    </div>
  );
}

export default App;

