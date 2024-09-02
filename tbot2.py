import telebot

# Замість 'YOUR_BOT_TOKEN' вставте свій токен бота Telegram
bot = telebot.TeleBot('6702973403:AAHRNDjkFhkWRjZMN0b03LYYRoVKARK5JUY')

@bot.message_handler(commands=['start'])
def send_chat_id(message):
    bot.send_message(message.chat.id, f'Ваш chat_id: {message.chat.id}')

bot.polling()