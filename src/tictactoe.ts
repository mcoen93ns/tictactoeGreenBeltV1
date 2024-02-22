import { Board } from "./board";

export class TicTacToe {
  private board: Board;

  constructor() {
    this.board = new Board();
  }

  play(mark: "X" | "O", x: number, y: number): void {
    this.board.placeMark(mark, x, y);
  }

  winner(): string | null {
    return this.board.checkWinner();
  }
}
