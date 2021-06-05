const Mysql                 = require('mysql');
const executeQuery  		= require('../config/database.js');

class UserModel {
    async signin_user1(user){
		try{
            let values = [user['email']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ?`, values);
			return await executeQuery(signin_user_query);
		}catch(err){
			console.log(err);
		}    
	}
    async signin_user2(user){
		try{
			let values = [user['email']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ?`, values);
			let signin_user_result =  await executeQuery(signin_user_query);
            if(signin_user_result == null || signin_user_result == ''){
                return false;
            } else {
                return true;
            }
		}catch(err){
			console.log(err);
		};
	}
    async signin_user3(user){
		try{
			let values = [user['email'], user['password']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ? AND password = ?`, values);
			let signin_user_result =  await executeQuery(signin_user_query);
            if(signin_user_result == null || signin_user_result == ''){
                return false;
            } else {
                return true;
            }
		}catch(err){
			console.log(err);
		};
	}
    async signin_user4(user){
		try{
			let values = [user['email'], user['password']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ? AND password = ?`, values);
			let signin_user_result =  await executeQuery(signin_user_query);
            if(signin_user_result == null || signin_user_result == ''){
                return false;
            } else {
                return '/success';
            }
		}catch(err){
			console.log(err);
		};
	}
    async signin_user5(user){
		try{
			let values = [user['email'], user['password']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ? AND password = ?`, values);
			let signin_user_result =  await executeQuery(signin_user_query);
            if(user['email'] == '' || user['email'] == null){
                return 'Email is required';
            } else if(user['password'] == '' || user['password'] == null){
                return 'Password is required';
            } else {
                return true;
            }
		}catch(err){
			console.log(err);
		};
	}
    async signin_user6(user){
		try{
			let values = [user['email'], user['password']];
			let signin_user_query  = Mysql.format(`SELECT * FROM users WHERE email = ? AND password = ?`, values);
			let signin_user_result =  await executeQuery(signin_user_query);
            if(user['email'] == '' || user['email'] == null && user['password'] == '' || user['password'] == null){
                return 'Email and password is required';
            } else {
                return true;
            }
		}catch(err){
			console.log(err);
		};
	}
}
module.exports = new UserModel;