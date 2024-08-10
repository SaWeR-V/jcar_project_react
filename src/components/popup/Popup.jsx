import './Popup.css';
import { icons } from '../icons';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

export function Popup({content, setPopupContent}) {
    const popupFrame = document.getElementById('popup');
    content === null ? popupFrame.className = 'hidden' : popupFrame.className = '';

    useEffect(() => {
        if (content !== null) {
            const timer = setTimeout(() => {
                setPopupContent(null);
            }, 3000);
            
            return () => clearTimeout(timer);
        }
    }, [content, setPopupContent]);

    if (content === null) return null;
    
    if (content.error) {
        popupFrame.classList.remove('hidden');

        return (
            createPortal(
                    <div className='popup_message fade-in'>
                        <svg viewBox='0 0 512 512' className='message_icon'>{icons.fail_icon}</svg>
                        <p>{content.error}</p>
                    </div>
                , popupFrame)
        )
    }
    else if (content.success) {
        popupFrame.classList.remove('hidden')
        return (
            createPortal(
                    <div className='popup_message fade-in'>
                        <svg viewBox='0 0 512 512' className='message_icon'>{icons.success_icon}</svg>
                        <p>{content.success}</p>
                    </div>
                , popupFrame)
        )
    }

}