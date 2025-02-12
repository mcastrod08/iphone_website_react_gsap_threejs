import React, { useEffect } from 'react'
import { useRef, useState } from 'react'
import { hightlightsSlides } from '../constants'
import gsap from 'gsap'

const VideoCarousel = () => {

  const videoRef = useRef([]);
  const videoSpanRef = useRef([]);
  const videoDivRef = useRef([]);

  const [video, setVideo] = useState({
     isEnd: false,
     startPlay: false,
     videoId: 0,
     isLastVideo: false,
     isPlaying: false,
  })

  const { isEnd, isLastVideo, startPlay, videoId, isPlaying } = video;

  const [loadedData, setLoadedData] = useState([])



  useEffect(() => {
    if(loadedData.length > 3) {
      if(!isPlaying) {
        videoRef.current[videoId].pause();
      } else {
        startPlay && videoRef.current[videoId].play();
      }
    }
  }, [startPlay, isPlaying, loadedData]) 


  useEffect(() => {
    const currentProgress = 0;
    let span = videoSpanRef.current;

    if(span[videoId]) {
      //progress of the video animated

      let anim = gsap.to(span[videoId], {
        onUpdate: () => {

        },
        onComplete: () => {

        }
      })
    }
  }, [videoId, startPlay])




  return (
    <>
      <div className='flex items-center'>
        {hightlightsSlides.map((list, i) => (
          <div key={list.id} id="slider" className="padding-carousel">
            <div className="video-carousel_container">
              <div className="w-full h-full flex-center rounded-3xl bg-black overflow-hidden">
                <video 
                  id="video"
                  playsInline={true}
                  preload="auto"
                  muted
                  ref={(el) => (videoRef.current[i] = el)}
                  onPlay={() => {
                    setVideo((prevVideo) => ({
                      ...prevVideo, isPlaying: true
                    }))
                  }}
                >
                  <source src={list.video} type="video/mp4"/>
                </video>
              </div>

              <div className="absolute top-12 left-[5%] z-10">
                {list.textLists.map((text) => (
                  <p key={text} className="md:text-2xl text-xl font-medium">
                    {text}
                  </p>
                ))}
              </div>

            </div>
          </div>
        ))}

      </div>


      <div className='button-highlights-videos relative flex-center mt-10'>
        <div className="flex-center bg-gray-500  gap-2 backdrop-blur-3xl rounded-full">
           {videoRef.current.map((_,i) => (
            <span
              key={i}
              ref={(el) => (videoDivRef.current[i] = el)}
              className="mx-2 w-3 h-3  bg-gray-200 rounded-full relative cursor-pointer"
            >
              <span 
                className="absolute h-full w-full rounded-full"
                ref={(el) => (videoSpanRef.current[i] = el)}
              />

              
            </span>
           ))}
        </div>

      </div>
    </>
  )
}

export default VideoCarousel