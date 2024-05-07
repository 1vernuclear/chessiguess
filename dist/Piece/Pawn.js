"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
class Pawn {
    constructor(color, position) {
        this.color = color;
        this.position = position;
    }
    getPossibleMoves(board) {
        // Implement logic specific to Rook's movement
        return []; // Placeholder return
    }
    move() {
        return null;
    }
}
exports.Pawn = Pawn;
