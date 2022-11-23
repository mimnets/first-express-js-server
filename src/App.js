import './App.css';
import Main from './components/layout/Main';
import Home from './components/Home/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import User from './components/User/User';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children:[
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/users'),
          element: <Home></Home>
        },
        {
          path:'/user/:id',
          element: <User></User>
        }
      ]
    }
  ])
      
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
