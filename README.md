# SimpleQuiz

> I will rename the repository soon...

![demo](assets/demo.gif)

## Features

- [x] Display 20-questions and 4-choice per question
- [x] Re-shuffle question and choice every time when page is refreshed
- [x] Display to Leader board
  - [x] Redux (player info/score for leader board)
  - [x] Generate unique user's ID (using [nanoid](https://github.com/ai/nanoid#readme))
- [x] CSS (I will set style with [MUI](https://mui.com/) later)
- [x] Typescript
- [x] Container

## Usage

```sh
docker-compose -f docker-compose.dev.yml down -v && \
docker-compose -f docker-compose.dev.yml up --build
```

## How-to-win ?

You can got high score by focusing on question number:

- Ex. **Question#`5` ?**
  
  Correct answer is **5** !!!.

