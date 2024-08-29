import React from 'react';
import Sidebar from '../layout/Sidebar';
import '../../css/Dashboard.css';


const Dashboard = () => {
    return (
        <div className="app">
            <Sidebar />

            <div className="content">
                <nav className="nav">WUC</nav>
                <div className='records'>
                    <div className='dash-nav'>  
                        <div className='user-info'>
                            <h4>Jems Smith</h4>
                            <img src='https://i.pinimg.com/236x/d9/22/66/d9226698a618385e3b6e2f50f4ef6023.jpg'></img>
                        </div>    

                    </div>
                    <div id='section-img'>
                         <div className='cont'>
                         <h1>WELCOME TO WUC</h1> 
                         <p>Manage student enrollment, monitor academic performance, and access essential tools all in one place. <br/>
                        Stay informed and ensure a smooth academic environment. For support, contact the IT team</p> 
                         </div>
                            </div>
                    <div className='course-overview'>
                    <h1>Course Overview</h1>
                    <div className='cards'>
                        <div className='sub-card'>
                            <img src='https://www.cheggindia.com/wp-content/uploads/2023/08/bba-full-form.png'/> 
                            <h1>BBA</h1>
                        </div>
                        <div className='sub-card'>
                            <img src='https://www.iimtindia.net/Blog/wp-content/uploads/2022/06/Bsc-CS.jpg'/> 
                            <h1>BSC Computing</h1>
                        </div>
                        <div className='sub-card'>
                            <img src='https://i.ytimg.com/vi/f0mymn0nmD0/maxresdefault.jpg'/> 
                            <h1>BSC Environment</h1>
                        </div>
                    </div> 
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;