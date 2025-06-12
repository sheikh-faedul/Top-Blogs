 
import Navbar from '../Components/Navbar';
 
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <div>
           <div className='h-18 md:h-12'>
             <Navbar></Navbar>
           </div>
            <Outlet></Outlet>
        </div>
    );
};

export default MainLayout;