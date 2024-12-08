import { useEffect, useCallback } from 'react';
import { io, Socket } from 'socket.io-client';
import { create } from 'zustand';

interface SocketStore {
  socket: Socket | null;
  setSocket: (socket: Socket) => void;
}

const useSocketStore = create<SocketStore>((set) => ({
  socket: null,
  setSocket: (socket) => set({ socket }),
}));

export const useSocket = () => {
  const { socket, setSocket } = useSocketStore();

  useEffect(() => {
    if (!socket) {
      const newSocket = io('http://localhost:3000');
      setSocket(newSocket);

      return () => {
        newSocket.close();
      };
    }
  }, [socket, setSocket]);

  const joinRoom = useCallback((room: string) => {
    if (socket) {
      socket.emit('join_room', room);
    }
  }, [socket]);

  const leaveRoom = useCallback((room: string) => {
    if (socket) {
      socket.emit('leave_room', room);
    }
  }, [socket]);

  const sendMessage = useCallback((data: { userId: string; content: string; room: string }) => {
    if (socket) {
      socket.emit('send_message', data);
    }
  }, [socket]);

  return { socket, joinRoom, leaveRoom, sendMessage };
};