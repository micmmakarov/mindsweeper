export interface Cell {
  opened: boolean
  hasMine: boolean
  marked: boolean
}

export interface Size {
  height: number
  width: number
}

export interface Options {
  size: Size
  mines: number
}

interface Visited {
  [key: string]: boolean
}

type Col = Cell[]
type Field = Col[]

interface Coordinate {
  x: number
  y: number
}

const withinField = (coordinate: Coordinate, size: Size): boolean => {
  return coordinate.x >= 0 && coordinate.y >= 0 && coordinate.x < size.width && coordinate.y < size.height
}

const sumCoordinates = (coordinate1: Coordinate, coordinate2: Coordinate): Coordinate => {
  return {
    x: coordinate1.x + coordinate2.x,
    y: coordinate1.y + coordinate2.y
  }
}

const directions: Coordinate[] = [
  { x: -1, y: 0 },
  { x: 1, y: 0 },
  { x: 0, y: -1 },
  { x: 0, y: 1 }
]

export class Game {
  field: Field
  size: Size
  mines: number
  lost: boolean = false

  constructor(
    options: Options = {
      size: {
        height: 1,
        width: 1
      },
      mines: 0
    }
  ) {
    const { size, mines }: { size: Size; mines: number } = options

    this.size = size
    this.mines = mines
    this.generate()
  }

  generate() {
    const field: Field = []
    for (let y = 0; y < this.size.height; y++) {
      const col: Col = []
      for (let x = 0; x < this.size.width; x++) {
        col.push({
          opened: false,
          hasMine: false,
          marked: false
        })
      }
      field.push(col)
    }
    this.field = field
    this.setMines()
  }

  setMines() {
    const fieldCopy: Cell[] = this.field.slice().flat()
    for (let i = 0; i < this.mines; i++) {
      const random: Cell = fieldCopy.splice(~~(Math.random() * fieldCopy.length), 1)[0]
      random.hasMine = true
    }
  }

  getCell(coordinate: Coordinate) {
    return this.field[coordinate.y][coordinate.x]
  }

  traverse(coordinate: Coordinate, visited: Visited = {}) {
    const key = Object.values(coordinate).join('-')
    if (!withinField(coordinate, this.size) || visited[key]) return
    visited[key] = true
    const cell: Cell = this.getCell(coordinate)
    if (cell.hasMine) return
    cell.opened = true
    directions.forEach((d) => this.traverse(sumCoordinates(coordinate, d), visited))
  }

  open(coordinate: Coordinate) {
    const cell: Cell = this.getCell(coordinate)
    if (cell.hasMine) {
      this.lost = true
      return
    }
    this.traverse(coordinate)
  }
}
