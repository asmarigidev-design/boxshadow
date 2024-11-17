import React from 'react';
import {links} from './data';
import logo from './logo.PNG';
import {FaTimes} from 'react-icons/fa';
import {useGlobalContext} from './context';

function Sidebar() {
	const{isOpenSidebar, closeSidebar} =useGlobalContext();
  return (
    <aside className={`${isOpenSidebar ? 'Sidebar show-sidebar' : 'Sidebar' }`}>
     <div className="Sidebar-header">
     	<img src={logo} alt="" className="logo" />
     	<button className="close-btn" onClick={closeSidebar}>
     	<FaTimes /></button>
      </div>
     <ul className="links">
{

	links.map((link) =>
		{
			const {id,url,text,icon} = link;
			return (
				<li key={id}>
			<a href={url}>{icon}{text}</a>
			</li>
			)
		}
	
		)
}

     </ul>
    </aside>
  )
}

export default Sidebar;
      //baray li ham ghon dakhele halgheh ekrar misheh key mizarim t

     //ghon {} gzasgtim yany darim az js minvisim bayad return v() bzarym.

