import { Position, Color } from '../types';
import { ChessBoard } from '../GameController/ChessBoard';

export interface ChessPiece{
    color: Color;
    position: Position;
    getPossibleMoves(board: ChessBoard): Position[];
    move(): null;
}