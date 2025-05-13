require('./modules/alias');
const { startClient } = require('./client');

async function bootstrap() {
  try {
    startClient();
  } catch (error) {
    console.error('Error during bootstrap:', error);
    // eslint-disable-next-line no-undef
    process.exit(1);
  }
}

bootstrap();
