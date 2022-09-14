import { Logger } from '@nestjs/common';

export const registerSignalHandler = server => {
  process.on('SIGHUP', signal => {
    Logger.log(`*^!@4=> Received event: ${signal}`);
  });

  let openConnections = 0;
  setInterval(
    () =>
      server.getConnections((err, connections) => {
        if (openConnections !== connections) {
          openConnections = connections;
        }
      }),
    1000,
  );

  let connections: any[] = [];

  server.on('connection', connection => {
    connections.push(connection);
    connection.on('close', () => (connections = connections.filter(curr => curr !== connection)));
  });

  const shutDown = () => {
    Logger.log('Received kill signal, shutting down gracefully');
    server.close(() => {
      Logger.log('Closed out remaining connections');
      process.exit(0);
    });

    setTimeout(() => {
      Logger.error('Could not close connections in time, forcefully shutting down');
      process.exit(1);
    }, 10000);

    connections.forEach(curr => curr.end());
    setTimeout(() => connections.forEach(curr => curr.destroy()), 5000);
  };

  process.on('SIGTERM', shutDown);
  process.on('SIGINT', shutDown);
  process.on('SIGINT', shutDown);

  process.on('unhandledRejection', (reason, p) => {
    // I just caught an unhandled promise rejection,
    // since we already have fallback handler for unhandled errors (see below),
    // let throw and let him handle that
    throw reason;
  });

  process.on('uncaughtException', error => {
    // I just received an error that was never handled, time to handle it and then decide whether a restart is needed
    Logger.error(error, 'Uncaught exception');
  });
};
