const API_URL = 'http://localhost:3000/api';

export const api = {
  async getUsers() {
    const response = await fetch(`${API_URL}/users`);
    return response.json();
  },

  async createUser(userData: { username: string; email: string }) {
    const response = await fetch(`${API_URL}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    return response.json();
  },

  async getMessages(room: string) {
    const response = await fetch(`${API_URL}/messages/${room}`);
    return response.json();
  },
};