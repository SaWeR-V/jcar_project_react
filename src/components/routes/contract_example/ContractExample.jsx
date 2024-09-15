import './ContractExample.css'
import { Worker, Viewer } from '@react-pdf-viewer/core'; 

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

export function ContractExample() {
    if (window.innerWidth <= 425) {
        return (
            <div className="pdf_viewer_container">
                <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                    <Viewer 
                        fileUrl={'/pdf/Агентский_договор_Япония_для_сайта.pdf'} 
                        defaultScale={0.65} 
                    />
                </Worker>
            </div>
        )
    }

    return (
        <div className="pdf_viewer_container">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
                <Viewer 
                    fileUrl={'/pdf/Агентский_договор_Япония_для_сайта.pdf'} 
                    defaultScale={1.5} 
                />
            </Worker>
        </div>
    )
}