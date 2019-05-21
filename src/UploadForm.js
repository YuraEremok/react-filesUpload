import React, {useRef} from 'react'

export const UploadForm =()=>{
    const inputEl = useRef(null);

    const onUpload = e=> {
        e.preventDefault()
        console.log('→ inputEl.current.files', inputEl.current.files[0]);


    }

    return <form onSubmit={onUpload}>
        <input type="file" ref={inputEl}/>
        <button type="submit">Upload</button>
    </form>

}