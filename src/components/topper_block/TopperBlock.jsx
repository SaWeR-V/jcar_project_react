import './TopperBlock.css'
import { MainContent } from './MainContent'

export function TopperBlock() {
    return (
        <main className="topper_block fade-in">
            <video src="/videos/timelaps.webm" className='topper_block_bkg_video' autoPlay loop></video>
            <MainContent />
        </main>
    )
}