import React from 'react'
import './sidebar.css'
import SidebarRow from './sidebarRow'
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

export default function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow selected title="home" Icon={HomeIcon}/>
            <SidebarRow title="trending" Icon={WhatshotIcon}/>
            <SidebarRow title="subscription" Icon={SubscriptionsIcon}/>
            <hr/>
            <SidebarRow title="library " Icon={VideoLibraryIcon}/>
            <SidebarRow title="history" Icon={HistoryIcon}/>
            <SidebarRow title="your videos" Icon={OndemandVideoIcon}/>
            <SidebarRow title="watch later" Icon={WatchLaterIcon}/>
            <SidebarRow title="liked videos" Icon={ThumbUpAltIcon}/>
            <SidebarRow title="show more" Icon={ArrowDropDownIcon}/>
            <hr/>
        </div>
    )
}
