export const defaultSocketOptions = {
  secure: false,
  hostname: 'localhost',
  port: 8000,
  autoReconnect: true,
  protocolVersion: 1 as const,
  pingTimeout: 8*60*60*1000,
  pingTimeoutDisabled: true,
  autoReconnectOptions: {
    randomness: 30000,
  },
};
