const { createTestScheduler } = require('jest')
const {User} = require('../src/04-library')
const {Book} = require('../src/04-library')

describe('The Book Class',() =>{
    test('Has the correct properties as passed to it', () =>{
        const b1 = new Book('A Book',12345,'A. Author')
        expect(b1.title).toBe('A Book')
        expect(b1.ISBN).toBe(12345)
        expect(b1.author).toBe('A. Author')
        expect(b1.isAvailable).toBe(true)
        expect(b1.currentOwner).toBe(null)
    })
})



describe('The User Class',() =>{
    test('Has the correct properties as passed to it', () =>{
        const u1 = new User('Steve','password1')
        expect(u1.username).toBe('Steve')
        expect(u1.password).toBe('password1')
        expect(u1.books).toEqual([])
    })
    test('Updates the username when the correct password is put in)', () =>{
        const u1 = new User('Steve','password1')
        u1.updateUsername('John','password1')
        expect(u1.username).toBe('John')
    })
    test('Fails to update username if the incorrect password is given',() =>{
        const u1 = new User('Steve','password1')
        u1.updateUsername('John','password2')
        expect(u1.username).toBe('Steve')
    })
    test('Checkout a book properly', () =>{
        const u1 = new User('Steve','password1')
        const b1 = new Book('A Book',12345,'A. Author')
        u1.checkoutBook(b1)
        expect(u1.books).toEqual([b1])
        expect(b1.isAvailable).toBe(false)
        expect(b1.currentOwner).toBe(u1.username)
        u1.returnBook(b1)
        expect(u1.books).toEqual([])
        expect(b1.isAvailable).toBe(true)
        expect(b1.currentOwner).toBe(null)

    })
})