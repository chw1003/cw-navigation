use tauri::{command};
use std::process::Command;
use tauri::{ Manager};

#[command]
pub async fn create_window(
    app: tauri::AppHandle,
    label: String,
    title: String,
    url: String,
) {
    std::thread::spawn(move || {
        let _window = tauri::WindowBuilder::new(
            &app,
            label,
            tauri::WindowUrl::External(url.parse().unwrap()),
        )
        .title(title)
        .build()
        .unwrap();
    });
}

#[command]
pub async fn open_url_by_chrome(url: String, ) {
    Command::new("open").arg("-a").arg("/Applications/Google Chrome.app").arg(url).output().expect("chrome打开url异常错误提示");
}

#[command]
pub fn config_window(app: tauri::AppHandle) {
    let win = app.get_window("config");
    if win.is_none() {
        std::thread::spawn(move || {
            let _setting_win = tauri::WindowBuilder::new(
                &app,
                "setting",
                tauri::WindowUrl::App("/config".parse().unwrap()),
            )
                .title("导航文件配置")
                .focus()
                .build()
                .unwrap();
        });
    }
}
