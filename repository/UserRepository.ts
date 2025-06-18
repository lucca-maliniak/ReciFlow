import { User } from "@/model/User";

class UsuarioRepository {
    private url = 'https://reciflow-backend.onrender.com';
    
    constructor() {}

    async registerUser(userInput: User) {
        const response = await fetch(`${this.url}/usuarios`, {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(userInput),
        })
        return await response.json();
    }
    
    async getUsers() {
        const response = await fetch(`${this.url}/usuarios`, {
            method: 'GET',
        })
        return await response.json();
    }
}

export default new UsuarioRepository();