import io from 'socket.io-client';

const socket = io(process.env.DOMAIN);

socket.on('connect', () => {
    console.log('client端已連線');
});

// Connection failed
socket.on('disconnect', () => {
    console.log('client端已斷線');
});

export default socket;