fx_version 'adamant'
games { 'gta5' }

author 'Nats0.#0001'

client_scripts {
    "config.lua",
    "client.lua"
}

server_scripts {
    "@mysql-async/lib/MySQL.lua",
    "config.lua",
    "server.lua"
}

ui_page('html/index.html')

files {
    "html/*.html",
    "html/css/*.css",
    "html/js/*.js",
}