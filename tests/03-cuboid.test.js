const {Cuboid} = require('../src/03-cuboid')

describe('The Cuboid Class should', () =>{
    test('Assign width, height and depth as expected', () => {
        const c1 = new Cuboid(4,5,6)
        expect(c1.width).toBe(4)
        expect(c1.height).toBe(5)
        expect(c1.depth).toBe(6)
    })
    test('Calculate the volume correctly as width * height * depth', () =>{
        const c1 = new Cuboid(4,5,6)
        expect(c1.volume()).toBe(120)
    })
    test('Be Painted an appropriate colour based on input', () =>{
        const c1 = new Cuboid(4,5,6)
        c1.paint('Red')
        expect(c1.colour).toBe('Red')
        c1.paint('Pink with Yellow Spots')
        expect(c1.colour).toBe('Pink with Yellow Spots')
    })

})