import React from 'react';
import './Masterpage.css';
import {Switch, Redirect ,Route} from 'react-router-dom';
import routes from '../../routes/routes'
import Sidebar from '../Sidebar/Sidebar';
import TopNav from '../TopNav/TopNav';

function Masterpage() {
    return (
        <>
            <TopNav/>
            <div className="conatiner-fluid">
                <div className="row">
                    <div className="col-md-2 admin__Sidebar">
                        <Sidebar/>
                    </div>

                    <div className="col-md-10 master__Content">
                        <Switch>
                            {routes.map((route,idx) => {
                                return(
                                    route.component && (<Route key={idx} path={route.path} exact={route.exact} name={route.name} render={(props) => (
                                        <route.component {...props}/>
                                    )}/>)
                                )
                            })}
                            <Redirect from="/adminmasterpage" to="/adminmasterpage/dashboard"/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Masterpage
