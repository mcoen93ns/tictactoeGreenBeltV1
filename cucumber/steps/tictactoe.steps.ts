/* eslint-disable import/no-extraneous-dependencies */
import { defineFeature, loadFeature } from "jest-cucumber";
import { TicTacToe } from "../../src/tictactoe";

const feature = loadFeature("cucumber/features/tictactoe.feature");

defineFeature(feature, (test) => {
  let board: TicTacToe;

  beforeEach(() => {
    board = new TicTacToe();
  });

  test("Player 1 wins with a horizontal line", ({ given, when, then }) => {
    given("a 3x3 tic tac toe board", () => {
      // Initialization of the board happens in beforeEach
    });

    when('player 1 places an "X" in cell 1,1', () => {
      board.play("X", 1, 1);
    });

    when('player 2 places an "O" in cell 2,1', () => {
      board.play("O", 2, 1);
    });

    when('player 1 places an "X" in cell 1,2', () => {
      board.play("X", 1, 2);
    });

    when('player 2 places an "O" in cell 2,2', () => {
      board.play("O", 2, 2);
    });

    when('player 1 places an "X" in cell 1,3', () => {
      board.play("X", 1, 3);
    });

    then("player 1 should be declared the winner", () => {
      expect(board.winner()).toBe("Player 1");
    });
  });
});
