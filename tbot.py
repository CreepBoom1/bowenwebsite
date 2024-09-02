from telegram import Bot, Update
from telegram.ext import Application, Updater, MessageHandler, CommandHandler, CallbackContext, filters, ContextTypes

TOKEN = '7214546258:AAEMTRq5uStAW4moDPfKPySKPTYa3FVdIdc'
BOT_USERNAME = 'Фабрика меблів Bowen'  # ! <<<<<<<<<<<------------------------------------------------------------------


async def start_command(update: Update, context: ContextTypes.DEFAULT_TYPE):
    await update.message.reply_text("Вітаю у моєму боті")


if __name__ == '__main__':
    app = Application.builder().token(TOKEN).build()
    app.add_handler(CommandHandler('start', start_command))

