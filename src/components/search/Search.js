import Sidebar from '../sidebar/Sidebar';
import React, { Component } from 'react'
import axios from '../../axios';

export default class Search extends Component {
  constructor(){
      super()
      this.state={
          videos : [],
          selected : null
      }

      
  }

    componentDidMount(){
     this.handleSubmit()
     }
     
    handleSubmit = () =>{
    const {title}= this.props.match.params;
     axios
     .get('https://www.googleapis.com/youtube/v3/',{
        params:{
            q: `${title}`,
            part:"snippet",
            maxResults: 5,
            key: "AIzaSyDlSyzKtCKD8Ghvzj0cVzpEKau6Xk2cSMk",
           
        }
        }).then(res=>{
            this.setState({
                videos: res.data.items
            })
        }).catch(e=>console.log(e))

    }
      

    render() {
        return (
            <div>
                 <div className="app_page">
                    <Sidebar />
                  
                </div>
            </div>
        )
    }
}


