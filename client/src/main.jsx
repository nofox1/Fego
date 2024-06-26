import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter} from 'react-router-dom'
import './index.css'

import Home from './pages/Home.jsx'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx'
import Error from './pages/Error.jsx'
import Detail from './pages/Detail.jsx'
import OrderHistory from './pages/OrderHistory.jsx'
import Purchase from './pages/Purchase.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    error: <Error />,
    children: [
      {
        index: true,
        element: <Home/>
      }, {
        path: '/login',
        element: <Login/>
      }, {
        path: '/signup',
        element: <Signup/>
      }, {
        path: '/product/:id',
        element: <Detail/>
      }, {
        path: '/orderHistory',
        element: <OrderHistory />
      }, {
        path: '/purchase',
        element: <Purchase/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
