import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Services from './Components/Services/Services/Services';
import Review from './Components/Review/Review';
import Dashboard from './Components/Dashboard/Dashboard';
import Payment from './Components/Payment/Payment';
import Admin from './Components/Admin/Admin';
import BookManage from './Components/Admin/BookManage';
import EditBooking from './Components/Admin/EditBooking';
// import CommonDesign from './Components/Shared/CommonDesign';
import Login from './Components/Login/Login';
import ClientBooking from './Components/Services/Booking/ClientBooking';
import { createContext, useState } from 'react';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
   const [loggedInUser, setLoggedInUser] = useState({});

  return (
   <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>

   <Router>
     <Switch>
       <Route path='/services'>
          <Services/>
       </Route>
       <PrivateRoute path='/dashboard'>
         <Dashboard></Dashboard>
       </PrivateRoute>
       <Route path='/payment'>
          <Payment></Payment>
       </Route>
       <PrivateRoute path='/review'>
          <Review></Review>
       </PrivateRoute>
       <PrivateRoute path='/admin'>
          <Admin></Admin>
       </PrivateRoute>
       <Route path='/manage'>
         <BookManage></BookManage>
       </Route>
       <Route path='/edit'>
         <EditBooking></EditBooking>
       </Route>
       {/* <Route path='/common'>
          <CommonDesign></CommonDesign>
       </Route> */}
       <PrivateRoute path='/booking'>
          <ClientBooking></ClientBooking>
       </PrivateRoute>
       <Route path='/login'>
          <Login></Login>
       </Route>
       <Route path='/'>
          <Home/>
       </Route>
     </Switch>
   </Router>
   </UserContext.Provider>
  );
}

export default App;
