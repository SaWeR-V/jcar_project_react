import { createPortal } from "react-dom";

export function RecallOrderModal() {
    const modal = document.getElementById('modal')
    return (
        createPortal(
                <div>
                    <h1>HELLOOOO!!!</h1>
                </div>
        , modal)
    )
}