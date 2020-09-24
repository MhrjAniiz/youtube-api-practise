import React from 'react'
import Sidebar from "./sidebar/Sidebar";
import Recommended from "./search/Recommended";

export default function Home() {
    return (
        <div>
             <div className="app_page">
              <Sidebar />
              <Recommended />
            </div>
        </div>
    )
}
