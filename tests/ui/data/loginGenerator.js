// tests/ui/data/loginGenerator.js
// Генератор тестовых данных для логина

const { faker } = require('@faker-js/faker');

class LoginGenerator {
    // Генерация ВАЛИДНЫХ данных для входа
    static generateValidCredentials() {
        return {
            username: 'standard_user',
            password: 'secret_sauce',
            description: 'обычный пользователь'
        };
    }

    // Генерация данных ЗАБЛОКИРОВАННОГО пользователя
    static generateLockedUserCredentials() {
        return {
            username: 'locked_out_user',
            password: 'secret_sauce',
            description: 'заблокированный пользователь'
        };
    }

    // Генерация данных ПРОБЛЕМНОГО пользователя
    static generateProblemUserCredentials() {
        return {
            username: 'problem_user',
            password: 'secret_sauce',
            description: 'проблемный пользователь'
        };
    }

    // Генерация НЕВАЛИДНЫХ данных (случайные логин и пароль)
    static generateInvalidCredentials() {
        return {
            username: faker.internet.userName(),
            password: faker.internet.password(),
            description: 'несуществующий пользователь'
        };
    }

    // Генерация пустых данных
    static generateEmptyCredentials() {
        return {
            username: '',
            password: '',
            description: 'пустые поля'
        };
    }

    // Генерация данных только с логином (без пароля)
    static generateOnlyUsernameCredentials() {
        return {
            username: 'standard_user',
            password: '',
            description: 'только логин, нет пароля'
        };
    }
}

module.exports = { LoginGenerator };