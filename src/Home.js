import React from 'react';
import {FaBars} from 'react-icons/fa';
//import { ToastContainer, toast } from 'react-toastify';
import {AppContext} from './context';
import {useGlobalContext} from './context';



function Home() {
	const {openSidebar} = useGlobalContext();
  return (
    <main>
     <button className="sidebar-toggle" onClick={openSidebar}>
<FaBars />
     </button>
    </main>
  );
}

export default Home;
