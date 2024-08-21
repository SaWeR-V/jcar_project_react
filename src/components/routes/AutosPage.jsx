import { useEffect } from "react";
import { Autos } from "../autos/Autos";

export function AutosPage() {
    useEffect(() => {
        const top = document.querySelector('.thematic_content_wrapper');
        top.scrollIntoView()
    },[])

    return (
        <main className="thematic_content_wrapper cars_page fade-in">
            <Autos/> 
        </main>
    )
}