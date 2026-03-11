import TelegramBot from "node-telegram-bot-api";
import dotenv from "dotenv";
import { registerCommands } from "./commands";

dotenv.config();

const token = process.env.TELEGRAM_BOT_TOKEN as string;

export const bot = new TelegramBot(token, { polling: true });

export function startBot() {
  console.log("Unfee Telegram Bot running...");
  registerCommands(bot);
}
