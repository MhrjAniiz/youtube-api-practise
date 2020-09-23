import React from 'react'
import './sidebar.css'
import SidebarRow from './sidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="home" Icon={HomeIcon}/>
            <SidebarRow title="trending" Icon={WhatshotIcon}/>
            <SidebarRow title="home" Icon={SubscriptionsIcon}/>
            <hr/>
        </div>
    )
}
