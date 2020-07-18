import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ isAuthenticated, signOut }: any) => {
    return (
        <div className="NavbarContainer">
            <div className="Title">Tasks App</div>
            <div className="NavbarItemsContainer">
                {isAuthenticated ? 
                    <>
                        <div className="NavbarItem">
                            <Link className="Link" id="list" to="/tasks">Tasks List</Link>
                        </div>
                        <div className="NavbarItem">
                            <Link className="Link" to="/addTask">Add New Task</Link>
                        </div>
                        <div className="NavbarItem">
                            <button className="Link" onClick={signOut}>Sign Out</button>
                        </div>
                    </> 
                :
                   null
                }
            </div>
        </div>
    );
};

export default Navbar;