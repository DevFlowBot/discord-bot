module.exports = async (client, message) => {
  const prefix = '.';

  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName);

  if (!command) return;

  try {
    command.execute(client, message, args);
  } catch (error) {
    console.error('Erro ao executar o comando:', error);
  }
};
