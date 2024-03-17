import React from 'react';
import { NavLink } from 'react-router-dom';
import logo1 from '../../../../public/image2.png'
import logo2 from '../../../../public/image3.png'

const SideBar = () => {
    return (

        <div className=''>
            <div className='flex px-4 gap-0 absolute -top-3'>
                <img src={logo2} alt="" />
                <img src={logo1} alt="" />

            </div>
            <div>
                <ul className='mb-4 mt-12 space-y-3 text-sm'>
                    <li className='text-xl font-bold'>Menu</li>
                    <li>
                        <NavLink>Dasboard</NavLink>
                    </li>
                    <li>
                        <NavLink>Massage</NavLink>
                    </li>
                    <li>
                        <NavLink>Calender</NavLink>
                    </li>
                </ul>
                <ul className=' mb-4 mt-4 space-y-3 text-sm'>
                    <li className='mb-2 text-xl font-bold'>Recruitments</li>
                    <li>
                        <NavLink>Jobs</NavLink>
                    </li>
                    <li>
                        <NavLink>Application</NavLink>
                    </li>
                    <li>
                        <NavLink>Career site</NavLink>
                    </li>
                    <li>
                        <NavLink>My Referrals</NavLink>
                    </li>
                </ul>
                <ul className=' mb-4 mt-4 space-y-3 text-sm '>
                    <li className='mt-4 mb-2 text-xl font-bold'>Organization</li>
                    <li>
                        <NavLink>Employee</NavLink>
                    </li>
                    <li>
                        <NavLink>Structure</NavLink>
                    </li>
                    <li>
                        <NavLink>Report</NavLink>
                    </li>
                    <li>
                        <NavLink>Settings</NavLink>
                    </li>
                    <li>
                        <NavLink>Logout</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SideBar;