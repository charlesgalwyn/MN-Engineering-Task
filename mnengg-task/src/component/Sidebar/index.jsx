import React from 'react';
import { NavLink } from 'react-router-dom';
import { BiSolidDashboard } from 'react-icons/bi';
import { CgProfile } from 'react-icons/cg';
import { AiOutlineCustomerService } from 'react-icons/ai';

const Sidebar = () => {
  const toggleSidebar = () => {
    const sidebar = document.querySelector('.sidenav');
    sidebar.style.display = sidebar.style.display === 'none' ? 'block' : 'none';
  };
  return (
    <div class="sidenav">
      <NavLink to={'/about'} className={'d-flex align-items-center gap-2'}>
        <CgProfile />
        <span>About</span>
      </NavLink>
      <NavLink to={'/dashboard'} className={'d-flex align-items-center gap-2'}>
        <BiSolidDashboard />
        <span>Dashboard</span>
      </NavLink>
      <NavLink to={'/service'} className={'d-flex align-items-center gap-2'}>
        <AiOutlineCustomerService />
        <span>Service</span>
      </NavLink>
    </div>
  );
};

export default Sidebar;
