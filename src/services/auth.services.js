import { request } from './api';

class AuthServices {

    /**
     * 
     * @param {*} email 
     * @param {*} password 
     * @returns response data;
     */
    login(email, password){
        return request("/login", "POST",
            {
                email,
                password
            }
        );
    }

};

export default new AuthServices();
