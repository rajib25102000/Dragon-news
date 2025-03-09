import React from 'react';
import logo from '../../../assets/download (1).jpg'
import moment from 'moment';


const Header = () => {
    return (
        <div className=''>
            <div  className='flex flex-col items-center'>
            <img className='h-40 w-80 rounded-lg' src={logo} alt="" />
            <p>Journalism Without Fear Or Favour</p>
            <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
        </div>
    );
};

export default Header;