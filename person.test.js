const {handleInputs} = require('./person')

test('no input', () => {
    expect(handleInputs([])).toBe('Hello, my friend.')
})

test('single input', () => {
    expect(handleInputs(['Bob'])).toBe('Hello, Bob.')
})

test('multiple input', () => {
    expect(handleInputs(['Alice', 'Bob', 'Jerry'])).toBe('Hello, Alice, Bob, and Jerry.')
})

test('one shouter', () => {
    expect(handleInputs(['BARRY'])).toBe('HELLO, BARRY!')
})

test('multiple shouters', () => {
    expect(handleInputs(['BARRY', 'PETRA', "EVELIN"])).toBe('HELLO, BARRY, PETRA, AND EVELIN!')
})

test('multiple shouters with commas', () => {
    expect(handleInputs(['BARRY', 'PETRA, EVELIN', 'FANNI, SOFI'])).toBe('HELLO, BARRY, PETRA, EVELIN, FANNI, AND SOFI!')
})

test('shouters and non shouters', () => {
    expect(handleInputs(['JAY', 'Maya', 'BOB', 'Alice', 'Charlotte'])).toBe('Hello, Maya, Alice, and Charlotte. AND HELLO, JAY, AND BOB!')
})

test('commas', () => {
    expect(handleInputs(['Jerry', 'Alice, Bob', 'Fanni, Sofi'])).toBe('Hello, Jerry, Alice, Bob, Fanni, and Sofi.')
})

test('everything', () => {
    expect(handleInputs(['JAY', 'Maya', 'Alice', 'Charlotte', 'ADEL', 'Dani, PETRA', 'EVELIN, JANKA', 'Tamas, Janos'])).toBe('Hello, Maya, Alice, Charlotte, Dani, Tamas, and Janos. AND HELLO, JAY, ADEL, PETRA, EVELIN, AND JANKA!')
})