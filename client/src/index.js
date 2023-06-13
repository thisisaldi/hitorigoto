import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoute from './components/PrivateRoute';
import Profile from './pages/Profile';
import React from 'react';
import EditProfile from './pages/EditProfile';
import About from './pages/About';
import GeneralCourse from './pages/GeneralCourse'
import CourseMaterial from './pages/CourseMaterial';
import NotFound from './pages/NotFound';
import CourseLogin from './pages/CourseLogin';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/aboutus' element={<About/>} />
      <Route path='*' element={<NotFound />}/>
      <Route path='/profile' element={<Profile />} />
      <Route path='/editprofile' element={<EditProfile/>} />
      <Route path='/course' element={<GeneralCourse/>} />
      <Route path='/course/:jlpt/:id' element={<CourseMaterial />} />
      <Route path='/course/n3' element={<CourseLogin />} />
    </Route>
  )
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>
  </Provider>
);