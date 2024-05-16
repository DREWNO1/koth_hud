fx_version 'cerulean'

game 'gta5'
lua54 'yes'
version '0.0.1'

ui_page 'nui/index.html'

server_scripts {
	'server/main.lua',
}

client_scripts {
	'client/main.lua'
}

files {
	'*.*',
	'nui/*.*',
	'nui/public/*.*'
}