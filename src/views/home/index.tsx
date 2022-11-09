import {useEffect, useState} from 'react';
import AppItem, { type AppData } from '../../components/ContentItem';
import './index.scss';
import {APP_DATA} from "../../config";
import {readConfig} from "../../utils";

export default function HomeView() {
  const [content, setContent] = useState<Record<string, any>>();
  const [reload, setReload] = useState(false);

  useEffect(()=>{

    (async function () {
      const config = await readConfig()
      if (!config){
        setContent(APP_DATA)
      }else {
        setContent(JSON.parse(config))
      }
    })()

  },[reload])

  return (
    <div className="home">
      {content?.app?.map((group: any) => {
            if (!group?.type) return null;
            return (
              <div key={group.type}>
                <h3>{group.type}</h3>
                <div className="app-group">
                  {group?.items?.map((app: AppData) => (
                    <AppItem
                      key={app.name}
                      app={app}
                      type={group.type}
                    />
                  ))}
                </div>
              </div>
            )
          })
        }
    </div>
  )
}
