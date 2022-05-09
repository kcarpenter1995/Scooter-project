const User = require('../src/User')

// User tests here
describe('User', () => {
    const newUser = new User('scooterboy16', 'password', 27);
    // test username
    test('Has username', () => {
        expect(newUser.username).toBe('scooterboy16');
    })

    // test password
    test('Password is correct', () => {
        expect(newUser.password).toBe('password');
    })
    // test age
    test('Age is correct', () => {
        expect(newUser.age).toBe(27)
    })
})
