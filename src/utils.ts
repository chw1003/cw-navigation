import { homeDir, join } from '@tauri-apps/api/path';
import { readTextFile, writeTextFile, BaseDirectory } from '@tauri-apps/api/fs';

export const SETTING_DATA = {
  'title': 'cw导航',
  app: [
    {
      type: 'default',
      items: [
        { name: 'Vite', url: 'https://vitejs.dev', icon: 'https://vitejs.dev/logo.svg' },
        { name: 'React', url: 'https://reactjs.org', icon: 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' },
        { name: 'Tauri', url: 'https://tauri.app', icon: `<svg height="232" viewBox="0 0 206 232" width="206" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><path d="m143.116196 84.1321542c0 12.1502645-9.849735 21.9999998-22 21.9999998-12.150264 0-21.9999996-9.8497353-21.9999996-21.9999998s9.8497356-22 21.9999996-22c12.150265 0 22 9.8497355 22 22z" fill="#ffc131" fill-rule="nonzero"/><circle cx="84.116196" cy="147.132154" fill="#24c8db" fill-rule="nonzero" r="22" transform="matrix(-1 0 0 -1 168.232392 294.264308)"/><path d="m166.716196 154.632154c-8.841743 5.715992-18.679255 9.718842-29 11.8 2.991044-8.527564 3.983224-17.628248 2.9-26.6 24.016262-8.395668 39.946012-31.240649 39.521834-56.6785758-.424178-25.4379272-17.10674-47.7390973-41.389568-55.3293774-24.282827-7.5902802-50.696394 1.2399835-65.5322656 21.9079534-11.1937992 1.2594624-22.0866666 4.4393677-32.2 9.4 10.9876598-35.4509586 43.9384787-59.48904825 81.0513996-59.12814515 37.112921.36090311 69.590037 25.03524405 79.886202 60.69317635 10.296164 35.6579323-4.02941 73.8464666-35.237602 93.9349686zm-124.6999996-80.1999998 20.6 2.5c.4672649-3.9781456 1.3384254-7.8983677 2.6-11.7-8.1483051 1.894308-15.9679274 4.9951927-23.2 9.2z" fill="#ffc131"/><path d="m38.4161964 76.6321542c8.8948962-5.7743206 18.802756-9.8121128 29.2-11.9-3.1450698 8.5262389-4.2745298 17.6645971-3.3 26.7-23.931224 8.5137152-39.727431 31.3882968-39.2123253 56.7836008.5151057 25.395305 17.225892 47.61053 41.4826664 55.146824 24.2567745 7.536294 50.6143145-1.29811 65.4296585-21.930425 11.187736-1.227977 22.080334-4.373976 32.2-9.3-11.01475 35.412435-43.948922 59.411017-81.0330575 59.047436-37.0841352-.36358-69.5414482-25.003273-79.85976628-60.624862-10.31831804-35.621589 3.94441819-73.7944325 35.09282418-93.9225738zm124.6999996 80.1999998-.4.2z" fill="#24c8db"/></g></svg>` },
      ],
    },
  ]
};

export async function getConfigPath() {
  const home = await homeDir();
  return join(home, ".cw", "config.json");
}

export async function readConfig() {
  return await readTextFile(await getConfigPath());
}

export async function writeConfig(content: string) {
  await writeTextFile('.cw/config.json', content, { dir: BaseDirectory.Home });
}

