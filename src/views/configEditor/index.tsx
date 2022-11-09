import { useEffect, useState } from 'react';
import Editor from "@monaco-editor/react";
import { readConfig, writeConfig} from "../../utils";
import {APP_DATA} from "../../config";


const EditorView: React.FC = () => {
    const [content, setContent] = useState('');


    useEffect(()=>{
         (async function () {
             const app_data_str = JSON.stringify(APP_DATA, null, 4)
             const config = await readConfig()
             if (!config){
                 await writeConfig(app_data_str)
                 setContent(app_data_str)
             }else {
                 setContent(config)
             }


        })()
    },[])

    const editorOnChange = (val: string = '') => {
        if (val){
            writeConfig(val)
        }
        setContent(val);
    };
    // console.log('content-- ',content)

    return (
        <div style={{height:'100vh',width:'100%',resize:"both"}}>
            <Editor
                defaultLanguage='json'
                value={content}
                onChange={editorOnChange}
            />
        </div>
    );
};

export default EditorView;
