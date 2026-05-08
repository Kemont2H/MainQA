// tests/api/api-tests.spec.js
// 5 API тестов с использованием Service Object

const { test, expect } = require('@playwright/test');
const { UserService } = require('./services/userService');
const { PostGenerator } = require('./data/userGenerator');

test.describe('API автоматизация - JSONPlaceholder', () => {
    let userService;
    
    test.beforeEach(() => {
        userService = new UserService();
    });

    // ТЕСТ 1: Получение списка постов
    test('Тест 1: Получение списка постов', async () => {
        console.log('→ GET /posts');
        
        const response = await userService.getPosts();
        
        expect(response.status).toBe(200);
        expect(response.success).toBe(true);
        expect(response.data.length).toBeGreaterThan(0);
        expect(response.data[0]).toHaveProperty('id');
        expect(response.data[0]).toHaveProperty('title');
        
        console.log(`  ✓ Получено ${response.data.length} постов`);
        console.log('✅ Тест 1 пройден\n');
    });

    // ТЕСТ 2: Получение одного поста по ID
    test('Тест 2: Получение одного поста', async () => {
        console.log('→ GET /posts/1');
        
        const response = await userService.getPostById(1);
        
        expect(response.status).toBe(200);
        expect(response.success).toBe(true);
        expect(response.data.id).toBe(1);
        expect(response.data).toHaveProperty('title');
        expect(response.data).toHaveProperty('body');
        
        console.log(`  ✓ Пост найден: ${response.data.title.substring(0, 50)}...`);
        console.log('✅ Тест 2 пройден\n');
    });

    // ТЕСТ 3: Создание нового поста
    test('Тест 3: Создание нового поста', async () => {
        console.log('→ POST /posts');
        
        const newPost = PostGenerator.generatePost();
        console.log(`  📝 Создаем пост: ${newPost.title.substring(0, 50)}...`);
        
        const response = await userService.createPost(newPost);
        
        expect(response.status).toBe(201);
        expect(response.success).toBe(true);
        expect(response.data).toHaveProperty('id');
        expect(response.data.title).toBe(newPost.title);
        expect(response.data.body).toBe(newPost.body);
        
        console.log(`  ✓ Пост создан с ID: ${response.data.id}`);
        console.log('✅ Тест 3 пройден\n');
    });

    // ТЕСТ 4: Обновление поста
    test('Тест 4: Обновление поста', async () => {
        console.log('→ PUT /posts/1');
        
        const updateData = PostGenerator.generatePostUpdate();
        console.log(`  📝 Обновляем пост: ${updateData.title.substring(0, 50)}...`);
        
        const response = await userService.updatePost(1, updateData);
        
        expect(response.status).toBe(200);
        expect(response.success).toBe(true);
        expect(response.data.title).toBe(updateData.title);
        expect(response.data.body).toBe(updateData.body);
        
        console.log(`  ✓ Пост обновлен`);
        console.log('✅ Тест 4 пройден\n');
    });

    // ТЕСТ 5: Удаление поста
    test('Тест 5: Удаление поста', async () => {
        console.log('→ DELETE /posts/1');
        
        const response = await userService.deletePost(1);
        
        expect(response.status).toBe(200);
        expect(response.success).toBe(true);
        
        console.log(`  ✓ Пост удален`);
        console.log('✅ Тест 5 пройден\n');
    });
});