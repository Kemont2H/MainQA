# Проект по автоматизации тестирования

## 📋 О проекте

Данный проект демонстрирует навыки автоматизации тестирования

### ✅ Реализованные требования:

Требование   
UI автоматизация (5 тестов + Page Object + генератор данных)
API автоматизация (5 тестов + Service + генератор данных)
CI/CD (GitHub Actions)
Docker контейнеризация
Allure отчет + история в GitHub Pages
Скриншоты в Allure 

## 🛠 Технологии

- **Playwright** - фреймворк для тестирования
- **Allure** - генерация отчетов
- **GitHub Actions** - CI/CD
- **Docker** - контейнеризация
- **Faker.js** - генерация тестовых данных

## 📁 Структура проекта

MainQA/
# CI/CD пайплайны
# API тесты
# Service Object
# Генераторы данных
# UI тесты
# Page Object
# Кастомные ассерты
# Генераторы данных
# Результаты тестов
# Сгенерированный отчет
# Docker образ
# Конфигурация
# Зависимости
# Документация


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
