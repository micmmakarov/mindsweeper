export interface Size {
    height: number;
    width: number;
}
export interface Options {
    size: Size;
    mines: number;
}
interface Visited {
    [key: string]: boolean;
}
type Col = Cell[];
type Field = Col[];
interface Coordinate {
    x: number;
    y: number;
}
export interface Cell {
    opened: boolean;
    hasMine: boolean;
    marked: boolean;
    location: Coordinate;
    mines: number;
}
export declare class Game {
    field: Field;
    size: Size;
    minesCount: number;
    lost: boolean;
    mines: Cell[];
    constructor(options?: Options);
    generate(): void;
    setMines(): void;
    getCell(coordinate: Coordinate): Cell;
    traverse(coordinate: Coordinate, visited?: Visited): void;
    open(coordinate: Coordinate): void;
    mark(coordinate: Coordinate): void;
    openAll(): void;
}
export {};
