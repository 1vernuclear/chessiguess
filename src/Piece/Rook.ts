import { ChessPiece } from '../interfaces/ChessPiece';
import { Position, Color } from '../types';
import { ChessBoard } from '../GameController/ChessBoard';

export class Rook implements ChessPiece {
  constructor(public color: Color, public position: Position) {}

  getPossibleMoves(board: ChessBoard): Position[] {
    // Implement logic specific to Rook's movement
    return []; // Placeholder return
  }

  move(): null {
      return null;
  }
}