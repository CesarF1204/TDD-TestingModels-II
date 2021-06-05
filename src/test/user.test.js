const chai                  = require('chai');
const expect                = chai.expect;
const UserModel             = require('../models/user.model');

describe('Login feature', function(){

    describe('User Model', function(){

        it('Given email and password as input, it should return user info (including password) when the email is found in the database', async function(){
            let user = {"email": "testuser@test.com"};
            let result = await UserModel.signin_user1(user);
            expect(result).to.eql([{"id": 1, "name": "Anthony Dillahunty", "email": "testuser@test.com", "password": "password123"}]);
        });

        it("Given email and password as input, it should return false when email doesn't exist in database.", async function() {
            let user = {"email": "doesntexist@test.com"};
            let result = await UserModel.signin_user2(user);
            expect(result).to.equal(false);
        });

        it("Given email and password as input, it should return true when email and password is correct", async function() {
            let user = {"email": "testuser@test.com", "password": "password123"};
            let result = await UserModel.signin_user3(user);
            expect(result).to.equal(true);
        });

        it('Given email and password as input, it should return the expected redirect_url (/success page) on success', async function() {
            let user = {"email": "testuser@test.com", "password": "password123"};
            let result = await UserModel.signin_user4(user);
            expect(result).to.equal('/success');
        });

        it('Given password as input, it should return an error message saying: Email is required, when email is missing', async function() {
            let user = {"password": "password123"};
            let result = await UserModel.signin_user5(user);
            expect(result).to.equal('Email is required');
        });

        it('Given email as input, it should return an error message saying: Password is required, when password is missing', async function() {
            let user = {"email": "testuser@test.com"};
            let result = await UserModel.signin_user5(user);
            expect(result).to.equal('Password is required');
        });

        it('Given empty input, it should return an error message saying: Email and password is required, when all fields are missing', async function() {
            let user = {};
            let result = await UserModel.signin_user6(user);
            expect(result).to.equal('Email and password is required');
        });
        
    });
});

