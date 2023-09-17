import React from 'react';
import './index.css'
import SidebarButton from '../SidebarButton';

const Sidebar = ({ hideSidebar, setHideSidebar }) => {
    return (
        <div className={`sidebar ${hideSidebar ? 'hidden' : ''}`}>
            <SidebarButton text="Home" />
            <SidebarButton text="About" />
            <SidebarButton text="To Do" />
            <SidebarButton text="Legal" />
        </div>
    );
};

export default Sidebar;
