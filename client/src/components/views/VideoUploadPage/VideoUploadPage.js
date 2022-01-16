import React from 'react'
import Dropzone from 'react-dropzone';

function VideoUploadPage() {
    return (
        <div style={{
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <div style={{ maxWidth:'700px', margin:'2rem auto '}}>
                <div>
                    Upload Video
                </div>

                <form>
                    <div style={{ display: 'flex', justifyContent:'space-between' }}>
                        <label>Title</label>
                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default VideoUploadPage
