import { FC } from 'react';
import { invoke } from '@tauri-apps/api/tauri';

import defaultIcon from '../../assets/defaultIcon.png';
import './index.scss';

export interface AppData {
  name: string;
  icon: string;
  url: string;
  script?: string;
}

interface AppItemProps {
  type: string;
  app: AppData;
  size?: 'lg' | 'sm';
  disabled?: boolean;
}

const AppItem: FC<AppItemProps> = ({ type, app, size = 'lg', disabled = false }) => {

  const handleWaWindow = async () => {
    if (disabled) return;
    if (!app.url) return;
    // await invoke('create_window', {
    //   label: Date.now().toString(16),
    //   title: `${type} / ${app.name}`,
    //   url: app.url
    // });

    await invoke('open_url_by_chrome', {
      url: app.url
    });
  };

  return (
    <div className={"app-item"} onClick={handleWaWindow} title={app.name}>
      <img className="app-icon" src={app.icon ? app.icon : defaultIcon} />
      <div className="app-name">{app.name}</div>
    </div>
  )
}

export default AppItem;
