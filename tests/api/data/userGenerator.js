// tests/api/data/userGenerator.js
// Генератор тестовых данных для API

const { faker } = require('@faker-js/faker');

class PostGenerator {
    // Генерация случайного поста
    static generatePost() {
        return {
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            userId: faker.number.int({ min: 1, max: 10 })
        };
    }

    // Генерация поста с конкретным userId
    static generatePostForUser(userId) {
        return {
            title: faker.lorem.sentence(),
            body: faker.lorem.paragraph(),
            userId: userId
        };
    }

    // Генерация данных для обновления поста
    static generatePostUpdate() {
        return {
            title: faker.lorem.sentence() + ' (updated)',
            body: faker.lorem.paragraph()
        };
    }

    // Генерация невалидного поста (без обязательных полей)
    static generateInvalidPost() {
        return {
            // нет title и body - невалидный пост
            userId: faker.number.int({ min: 1, max: 10 })
        };
    }
}

module.exports = { PostGenerator };