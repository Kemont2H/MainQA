# Проект по автоматизации тестирования

## 📋 О проекте

Данный проект демонстрирует навыки автоматизации тестирования

### ✅ Реализованные требования:

| Требование |  
|------------|-------------------------------------------------|
| UI автоматизация (5 тестов + Page Object + генератор данных) | 
| API автоматизация (5 тестов + Service + генератор данных)    | 
| CI/CD (GitHub Actions)                                       | 
| Docker контейнеризация                                       | 
| Allure отчет + история в GitHub Pages                        | 
| Скриншоты в Allure                                           |  
---------------------------------------------------------------
## 🛠 Технологии

- **Playwright** - фреймворк для тестирования
- **Allure** - генерация отчетов
- **GitHub Actions** - CI/CD
- **Docker** - контейнеризация
- **Faker.js** - генерация тестовых данных

## 📁 Структура проекта

MainQA/
├── .github/workflows/ # CI/CD пайплайны
├── tests/
│ ├── api/ # API тесты
│ │ ├── services/ # Service Object
│ │ ├── data/ # Генераторы данных
│ │ └── api-tests.spec.js
│ └── ui/ # UI тесты
│ ├── pages/ # Page Object
│ ├── assertions/ # Кастомные ассерты
│ ├── data/ # Генераторы данных
│ └── ui-tests.spec.js
├── allure-results/ # Результаты тестов
├── allure-report/ # Сгенерированный отчет
├── Dockerfile # Docker образ
├── playwright.config.js # Конфигурация
├── package.json # Зависимости
└── README.md # Документация


##  Быстрый старт

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/Kemont2H/MainQA.git
cd MainQA

# Установить зависимости
npm install

# Установить браузеры Playwright
npx playwright install

# Запустить все тесты
npm run test:all

# Запустить только UI тесты
npm run test:ui

# Запустить только API тесты
npm run test:api

# Сгенерировать отчет
npm run allure:generate

# Открыть отчет
npm run allure:open

# Собрать образ
npm run docker:build

# Запустить тесты в контейнере
npm run docker:run