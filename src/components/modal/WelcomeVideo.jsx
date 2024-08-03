import "./WelcomeVideo.css"

export function WelcomeVideo() {
    return (
        <video className="video_frame" src="/videos/JCAR_project.mp4" autoPlay={true} controls muted controlsList="nofullscreen nodownload noremoteplayback noplaybackrate foobar nopip"></video>
    )
}