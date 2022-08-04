const {Rectangle} = require('../src/01-rectangle')
const r1 = new Rectangle(5,11)
const r2 = new Rectangle(1241242154,111111)
describe('The Rectangle Class', () =>{
    test('should assign height and width correctly', () =>{
        expect(r1.width).toBe(5)
        expect(r1.height).toBe(11)

        expect(r2.width).toBe(1241242154)
        expect(r2.height).toBe(111111)
    })
    test('Area should calculate correctly by multiplying width * height', ()=>{
           expect(r1.area()).toBe(55)
           expect(r2.area()).toBe(137915656973094)
    })
    test('Area should calculate perimeter adding 2 * (Height + width)', ()=>{
        expect(r1.perimeter()).toBe(32)
        expect(r2.perimeter()).toBe(2482706530)
 })
})