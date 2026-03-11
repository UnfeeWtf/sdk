import TelegramBot from "node-telegram-bot-api";

export function registerCommands(bot: TelegramBot) {

  bot.onText(/\/start/, (msg) => {
    bot.sendMessage(
      msg.chat.id,
      `Welcome to Unfee 🚀

Telegram trading bot on Solana with ZERO fees.

Commands:
/buy
/sell
/wallet`
    );
  });

  bot.onText(/\/buy/, (msg) => {
    bot.sendMessage(msg.chat.id, "Enter token address to buy:");
  });

  bot.onText(/\/sell/, (msg) => {
    bot.sendMessage(msg.chat.id, "Enter token address to sell:");
  });

  bot.onText(/\/wallet/, (msg) => {
    bot.sendMessage(msg.chat.id, "Wallet feature coming soon.");
  });
}
