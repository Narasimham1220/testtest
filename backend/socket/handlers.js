import { Message } from '../models/Message.js';

export const setupSocketHandlers = (io) => {
  io.on('connection', (socket) => {
    console.log('User connected:', socket.id);

    socket.on('join_room', (room) => {
      socket.join(room);
      console.log(`User ${socket.id} joined room: ${room}`);
    });

    socket.on('leave_room', (room) => {
      socket.leave(room);
      console.log(`User ${socket.id} left room: ${room}`);
    });

    socket.on('send_message', async (data) => {
      try {
        const message = new Message({
          sender: data.userId,
          content: data.content,
          room: data.room
        });
        await message.save();
        
        const populatedMessage = await Message.findById(message._id).populate('sender');
        io.to(data.room).emit('receive_message', populatedMessage);
      } catch (error) {
        console.error('Error saving message:', error);
      }
    });

    socket.on('disconnect', () => {
      console.log('User disconnected:', socket.id);
    });
  });
};