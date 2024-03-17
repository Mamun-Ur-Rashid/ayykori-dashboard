import React from 'react';
import SideBar from '../shared/sideBar/SideBar';

const Dashboard = () => {
    return (
        <div className=' w-[1280px] h-[796px] bg-slate-100 flex pl-3 pr-6 gap-10 my-16 sticky'>
            <div className=' w-[166px] h-[633px] relative'>
                <SideBar></SideBar>
            </div>
            <div className=' w-[688px] h-[796px] bg-slate-500'>
            
            </div>
            <div className=' w-[290px] h-[796px] bg-slate-300' >

            </div>
        </div>
    );
};

export default Dashboard;