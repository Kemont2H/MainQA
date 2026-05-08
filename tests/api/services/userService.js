// tests/api/services/userService.js
// Service Object для работы с API

class UserService {
    constructor() {
        this.baseURL = 'https://jsonplaceholder.typicode.com';
    }

    // GET /posts - получить все посты
    async getPosts() {
        const response = await fetch(`${this.baseURL}/posts`);
        const data = await response.json();
        return {
            status: response.status,
            data: data,
            success: response.ok
        };
    }

    // GET /posts/{id} - получить один пост
    async getPostById(id) {
        const response = await fetch(`${this.baseURL}/posts/${id}`);
        const data = await response.json();
        return {
            status: response.status,
            data: data,
            success: response.ok
        };
    }

    // POST /posts - создать пост
    async createPost(postData) {
        const response = await fetch(`${this.baseURL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        return {
            status: response.status,
            data: data,
            success: response.ok
        };
    }

    // PUT /posts/{id} - обновить пост
    async updatePost(id, postData) {
        const response = await fetch(`${this.baseURL}/posts/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(postData)
        });
        const data = await response.json();
        return {
            status: response.status,
            data: data,
            success: response.ok
        };
    }

    // DELETE /posts/{id} - удалить пост
    async deletePost(id) {
        const response = await fetch(`${this.baseURL}/posts/${id}`, {
            method: 'DELETE'
        });
        return {
            status: response.status,
            success: response.ok
        };
    }
}

module.exports = { UserService };