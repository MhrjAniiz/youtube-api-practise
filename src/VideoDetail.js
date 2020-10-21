import React from 'react';

const VideoDetail = ({selectedVideo}) => {
    if (!selectedVideo) {
        return <div className='ui__embed'>
            <img className="space__image" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="loading"/>
        </div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${selectedVideo.id.videoId}`;
    console.log(typeof(selectedVideo));
    return (
        <div className='ui__embed'>
            <div >
                <iframe className="frame" src={videoSrc} allowFullScreen title='Video player'/>
            </div>
            <div className='ui segment'>
                <h4 className='ui header'>{selectedVideo.snippet.title}</h4>
                <p>{selectedVideo.snippet.description}</p>
            </div>
        </div>

    )
}

export default VideoDetail;