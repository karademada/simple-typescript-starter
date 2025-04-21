// interfaces/websockets/MessageGateway.ts
import { Server } from 'socket.io';
import { SendMessageUseCase } from '../../application/use-cases/message/SendMessageUseCase';

export function setupMessageSocket(
  io: Server,
  sendMessageUseCase: SendMessageUseCase,
) {
  io.on('connection', (socket) => {
    socket.on('send_message', async (data) => {
      const message = await sendMessageUseCase.execute(data);
      io.to(data.receiverId).emit('new_message', message); // Emit to receiver
    });

    socket.on('join', (userId) => {
      socket.join(userId); // Allow sending messages directly by userId
    });
  });
}
