import React from 'react'
import './sidebarrow.css'


export default function sidebarRow({selected,title,Icon}) {
    return (
        <div className={`sidebarrow ${selected && "selected"}`}>
            <Icon className="sidebarRow_icon" />
        <h3 className="sidebarRow_title">{title}</h3>
       
        </div>
    )
}
