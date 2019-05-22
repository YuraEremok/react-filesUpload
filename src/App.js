import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {UploadForm} from "./UploadForm";
import {List} from "./List";
import {Status} from "./status";

function App() {
  const [paths,setPaths] = useState([])
    const [status,setStatus] = useState('')

    const onUpdate =(path)=>{

      if(path) {
          setStatus('ok')

          setPaths(paths.concat(path))
      }else{
          setStatus('Fail')
      }
    }


  return (
       <div className="container">
         <UploadForm onUpdate = {onUpdate}/>
         <List data={paths}/>
           <Status status={status}/>
        </div>
  );
}

export default App;
