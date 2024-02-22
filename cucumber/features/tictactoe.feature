Feature: Tic Tac Toe horizontal victory

	Scenario: Player 1 wins with a horizontal line
		Given a 3x3 tic tac toe board
		When player 1 places an "X" in cell 1,1
		And player 2 places an "O" in cell 2,1
		And player 1 places an "X" in cell 1,2
		And player 2 places an "O" in cell 2,2
		And player 1 places an "X" in cell 1,3
		Then player 1 should be declared the winner
