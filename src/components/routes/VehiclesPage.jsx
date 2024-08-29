import { useEffect } from "react";
import { Vehicles } from "../vehicles/Vehicles";

export function VehiclesPage({props}) {
    useEffect(() => {
        const top = document.querySelector('.thematic_content_wrapper');
        top.scrollIntoView()
    },[])

    return (
        <main className="thematic_content_wrapper cars_page fade-in">
            <Vehicles data={props}/> 
        </main>
    )
}