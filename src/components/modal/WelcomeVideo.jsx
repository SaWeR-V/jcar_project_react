import { useEffect } from "react"
import "./WelcomeVideo.css"

export function WelcomeVideo({setHelloBaner}) {
    useEffect(() => {
        const video = document.querySelector('.video_frame');

        video.onended = () => {
            localStorage.setItem('jcar_welcome_video_viewed', 1);
            setHelloBaner(false);
        }
    })

    return (
        <video className="video_frame" src="/videos/JCAR_project.mp4" autoPlay controls controlsList="nodownload noremoteplayback noplaybackrate foobar nopip"></video>
    )
}