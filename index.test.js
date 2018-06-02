const parse = require('./index')
const singles = [{
    input: 'abd-al-aziz',
    expected: [{
        "ngram": "abd-al-aziz",
        "value": {
            "name": "abd-al-aziz",
            "gender": [
                "m"
            ],
            "culture": [
                "arabic"
            ],
            "id": "abd-al-aziz"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 0,
            "begin": 0,
            "end": 11
        }
    }]
}, {
    input: "julian",
    expected: [{
        "ngram": "julian",
        "value": {
            "name": "julian",
            "gender": [
                "m"
            ],
            "culture": [
                "english"
            ],
            "id": "julian"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 0,
            "begin": 0,
            "end": 6
        }
    }]
}, {
    input: "pierre",
    expected: [{
        "ngram": "pierre",
        "value": {
            "name": "pierre",
            "gender": [
                "m"
            ],
            "culture": [
                "french"
            ],
            "id": "pierre"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 0,
            "begin": 0,
            "end": 6
        }
    }]
}, {
    input: "les",
    expected: []
}, {
    input: "media",
    expected: []
}, {
    input: "grid",
    expected: []
}]


const sentences = [{
    input: "mon prénom est julian bilcke",
    expected: [{
        "ngram": "julian",
        "value": {
            "name": "julian",
            "gender": [
                "m"
            ],
            "culture": [
                "english"
            ],
            "id": "julian"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 3,
            "begin": 15,
            "end": 21
        }
    }]
}, {
    input: "my name is pierre dupont",
    expected: [{
        "ngram": "pierre",
        "value": {
            "name": "pierre",
            "gender": [
                "m"
            ],
            "culture": [
                "french"
            ],
            "id": "pierre"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 3,
            "begin": 11,
            "end": 17
        }
    }]

}, {
    input: "el nombre es sowmya dupond",
    expected: [{
        "ngram": "sowmya",
        "value": {
            "name": "sowmya",
            "gender": [
                "f"
            ],
            "culture": [
                "tamil"
            ],
            "id": "sowmya"
        },
        "score": 1,
        "position": {
            "sentence": 0,
            "word": 3,
            "begin": 13,
            "end": 19
        }
    }]
}, {
    input: "les media",
    expected: []
}, {
    input: "in grid",
    expected: []
}]

test('validate single names', () => Promise.all(
    singles.map(async ({
        input,
        expected
    }) => expect(await parse(input)).toEqual(expected))
))


test('extract names from sentences', () => Promise.all(
    sentences.map(async ({
        input,
        expected
    }) => expect(await parse(input)).toEqual(expected))
))
