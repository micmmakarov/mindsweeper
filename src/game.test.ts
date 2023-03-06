import { Game, type Size, type Options, type Cell } from './game'

const defaultSize: Size = {
  height: 10,
  width: 15
}

const defaultOptions: Options = {
  size: defaultSize,
  mines: 5
}

describe('Game creates a field', () => {
  test('Game creates a field of a certain width', () => {
    const game: Game = new Game(defaultOptions)

    expect(game.field[0].length).toBe(defaultSize.width)
  })
  test('Game creates a field of a certain height', () => {
    const game: Game = new Game(defaultOptions)

    expect(game.field.length).toBe(defaultSize.height)
  })
  test('Game creates a field with the right amount of mines', () => {
    const game: Game = new Game(defaultOptions)
    const minesCount: number = game.field.flat().filter((f) => f.hasMine).length

    expect(minesCount).toBe(defaultOptions.mines)
  })
})
describe('Logic works', () => {
  test('Traverses trough opened cells', () => {
    const newOptions: Options = { ...defaultOptions, mines: 0 }
    const game: Game = new Game(newOptions)
    const cells: Cell[] = game.field.flat()
    const openedCountBeforeClick: number = cells.filter((f) => f.opened).length
    game.open({ x: 0, y: 0 })
    const openedCountAfterClick: number = cells.filter((f) => f.opened).length

    expect(openedCountBeforeClick).toBe(0)
    expect(openedCountAfterClick).toBe(defaultSize.width * defaultSize.height)
  })
  test('Loses game if a mine is clicked', () => {
    const newOptions: Options = { ...defaultOptions, mines: defaultSize.width * defaultSize.height }
    const game: Game = new Game(newOptions)
    expect(game.lost).toBe(false)
    game.open({ x: 0, y: 0 })
    expect(game.lost).toBe(true)
  })
})
