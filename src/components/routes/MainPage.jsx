import { AboutUs } from "../about_us/AboutUs"
import { Categories } from "../categories/Categories"
import { HappyClients } from "../happy_clients/HappyClients"
import { TopperBlock } from "../topper_block/TopperBlock"

export function MainPage(){
    return (
        <>
            <TopperBlock/>
            <Categories/>
            <AboutUs/>
            <HappyClients/>
        </>
    )
}