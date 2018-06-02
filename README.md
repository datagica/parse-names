# Parse Names

If a name is missing or incorrect you can create a pull request

## Installation

    $ npm i @datagica/parse-names

## Usage

Example:

```javascript
await parse('did you watch romeo et juliette?')
```

Output:

```json
    [
      {
        "ngram": "romeo",
        "value": {
          "name": "romeo",
          "gender": [
            "m"
          ],
          "culture": [
            "italian"
          ],
          "id": "romeo"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 3,
          "begin": 14,
          "end": 19
        }
      },
      {
        "ngram": "juliette",
        "value": {
          "name": "juliette",
          "gender": [
            "f"
          ],
          "culture": [
            "french"
          ],
          "id": "juliette"
        },
        "score": 1,
        "position": {
          "sentence": 0,
          "word": 5,
          "begin": 23,
          "end": 31
        }
      }
    ]
```


## TODO

- FIX julián: there is a conflict with "julian" when both keys are in the
dataset

- FIX names by searching for � and replace
by the corresponding entry in prenoms.csv

- some name has been disabled because they look like common words
for instance 'read'
(search for comments in the database.js, symbols `/` or `*`)
in the future we might try to still match them, using a database of last names

- Add more names, using data from U.S. Census Bureau http://deron.meranda.us/data/
