# Dockerfile - в корне проекта
FROM mcr.microsoft.com/playwright:v1.40.0-focal

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Устанавливаем браузеры
RUN npx playwright install --with-deps chromium

# Создаем директорию для результатов
RUN mkdir -p allure-results test-results reports

# Команда по умолчанию
CMD ["npm", "run", "test:all"]