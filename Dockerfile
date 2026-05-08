FROM node:18-alpine

WORKDIR /app

# Копируем package.json
COPY package*.json ./

# Устанавливаем зависимости
RUN npm ci

# Копируем исходный код
COPY . .

# Устанавливаем Playwright и браузеры
RUN npx playwright install chromium

# Создаем папки для результатов
RUN mkdir -p allure-results test-results playwright-report

CMD ["npm", "run", "test:all"]