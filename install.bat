@echo off

:reboot
goto restart

:restart
npm i discord-rpc
node rpc.js
goto reboot
