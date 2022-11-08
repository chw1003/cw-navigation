#![cfg_attr(
all(not(debug_assertions), target_os = "windows"),
windows_subsystem = "windows"
)]
use std::path::{Path};
mod cw;

fn main() {
    let context = tauri::generate_context!();
    tauri::Builder::default()
        .setup(|_app| {
            // 配置文件存储路径
            let config_path = tauri::api::path::home_dir().unwrap().join(".cw").join("config.json");
            if !Path::new(&config_path).exists() {
                // 创建文件夹
                if let Some(t) = config_path.parent() {
                    std::fs::create_dir_all(t)?
                }
                // 创建配置文件
                std::fs::File::create(config_path).expect("create file failed");

            }
            Ok(())
        })
        .invoke_handler(tauri::generate_handler![
            cw::cmd::create_window,
            cw::cmd::open_url_by_chrome,
            cw::cmd::config_window,
        ])
        .menu(cw::menu::init(&context)) // 将菜单添加到所有窗口
        .on_menu_event(cw::menu::handler) // 监听菜单事件
        .run(context)
        .expect("error while running tauri application");
}
