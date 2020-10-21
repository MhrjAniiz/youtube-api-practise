import React from 'react'
import {Card,CardContent} from '@material-ui/core'

export default function ({handleSelectedVideo, video,title,thumbnails}) {
    return (
        <Card className="video__body" onClick={()=>handleSelectedVideo(video)}>
            <CardContent>
            <img src={thumbnails} alt="thumbnails_pic"/>
            <h2>{title}</h2>
            </CardContent>
           
        </Card>
    )
}
