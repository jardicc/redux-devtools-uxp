export const defaultSocketOptions = {
  secure: false,
  hostname: 'localhost',
  port: 8000,
  autoReconnect: true,
  protocolVersion: 2 as const,
  autoReconnectOptions: {
    randomness: 30000,
  },
};
