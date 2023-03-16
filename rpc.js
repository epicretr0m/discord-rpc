const RPC = require('discord-rpc');
const { receiveMessageOnPort } = require('worker_threads');
const rpc = new RPC.Client({
    transport: 'ipc'
});

rpc.on('ready', () => {
    rpc.setActivity({
        details: '',
        state: '',
        startTimestamp: new Date(),
        largeImageKey: '',
        largeImageText: '',
        smallImageKey: '',
        smallImageText: '',
        buttons: [{
            label: '',
            url: ''
        }, {
            label: '',
            url: ''
        }]
    });
    console.log('Your RPC is now connected');
})

rpc.login(
    {
        clientId: ''
    }
)
