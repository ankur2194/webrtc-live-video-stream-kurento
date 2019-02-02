var ws = require('ws');

const token = '0123456789';
const user = { id: 123 };
// var live = {}; // { 'broadcastId': { userId: 'userId', viewers: ['userId', 'userId'] } }
// var broadcast = {}; // { 'userId': ['broadcastId', 'broadcastId'] }

module.exports = (server) => {
    var wss = new ws.Server({
        server: server,
        path: '/init',
        verifyClient: (info, cb) => {
            if (info.req.headers.token === token) {
                info.req.user = user;
                cb(true);
            } else {
                cb(false, 401, 'Unauthorized');
            }
        }
    });

    wss.on('connection', (ws) => {
        var user = conn.upgradeReq.user;

        ws.on('error', (error) => {
            console.log('Error', error);
        });

        ws.on('close', () => {
            // 
        });

        ws.on('message', (_message) => {
            var message = JSON.parse(_message);
            
        });
    });
};