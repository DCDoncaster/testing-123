const {Spaceship} = require('../src/05-xwing')
const {Xwing} = require('../src/05-xwing')

describe('The Spaceship Should',() =>{
    test('have health and shields as per paramaters',() =>{
        const enterprise = new Spaceship(10,20)
        expect(enterprise.shield).toBe(20)
        expect(enterprise.health).toBe(10)
        expect(enterprise.xp).toBe(0)
        expect(enterprise.isDead).toBe(false)
    })
    test('take damage', () =>{
        const enterprise = new Spaceship(10,20)
        enterprise.takeDamage(10)
        expect(enterprise.shield).toBe(10)
        expect(enterprise.health).toBe(10)
        enterprise.takeDamage(15)
        expect(enterprise.shield).toBe(0)
        expect(enterprise.health).toBe(5)
    })
    test('dies when taking damage in excess of it\'s shields and health combined',() =>{
        const enterprise = new Spaceship(10,20)
        enterprise.takeDamage(100)
        expect(enterprise.shield).toBe(0)
        expect(enterprise.health).toBe(0)
        expect(enterprise.isDead).toBe(true)
    })
    test('gets hurt to the tune of 10% when colliding with another ship which should also take 10% damage',() =>{
        const enterprise = new Spaceship(20,20)
        const challenger = new Spaceship(10,10)
        Spaceship.collide(enterprise, challenger)
        expect(enterprise.health).toBe(18)
        expect(challenger.health).toBe(9)
        Spaceship.collide(enterprise, challenger)
        expect(enterprise.health).toBe(16.2)
        expect(challenger.health).toBe(8.1)
    })
    test('gains experience when given XP', ()=>{
        const enterprise = new Spaceship(20,20)
        enterprise.levelUp(20)
        expect(enterprise.xp).toBe(20)
        enterprise.levelUp(200)
        expect(enterprise.xp).toBe(220)
    })  
})
describe('The Xwing should', () =>{
    test('Should heal 10% of XP when gaining XP', ()=>{
        const red5 = new Xwing(20,20,10)
        red5.levelUp(100)
        expect(red5.health).toBe(120) 
    })
    test('Should heal 10% of it\'s current XP when Heal Function is called', ()=>{
        const red5 = new Xwing(20,20,10)
        red5.xp = 20
        red5.heal()
        expect(red5.health).toBe(22)

    })
    test('Should get faster when losing shields', ()=>{
        const red5 = new Xwing(20,0,10)
        expect(red5.speed()).toBe(20)
    })
    
})
