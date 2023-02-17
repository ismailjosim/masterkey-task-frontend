import { createBrowserRouter } from 'react-router-dom';
import Home from '../components/Home/Home';
import Error from '../layouts/Error';
import Main from '../layouts/Main';


const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]


    }
])

export default routes;
