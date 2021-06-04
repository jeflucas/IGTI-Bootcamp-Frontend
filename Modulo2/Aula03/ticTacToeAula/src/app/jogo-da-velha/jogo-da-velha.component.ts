import { Component } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent {

  currentPlayer: string = 'X'
  winner: string = ''

  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]

  processPlay(line: number, col: number) {
    if(this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer

      //verifica ganhador
      if (this.checkWinner(this.currentPlayer)){
        this.winner = this.currentPlayer
      }

      //trocar jogador
      if (this.currentPlayer == 'X') {
        this.currentPlayer = 'O'
      } else {
        this.currentPlayer = 'X'
      }
    }
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++){
      if (this.board[i][0] == player && this.board[i][1] == player && this.board[i][2] == player) {
        return true
      }
    }
    for (let i = 0; i < this.board.length; i++){
      if (this.board[0][i] == player && this.board[1][i] == player && this.board[2][i] == player) {
        return true
      }
    }

    if (this.board[0][0] == player && this.board[1][1] == player && this.board[2][2] == player) {
      return true
    } 
    
    if (this.board[0][2] == player && this.board[1][1] == player && this.board[2][0] == player) {
      return true
    }

    return false
  }

  reset(){
    this.currentPlayer = 'X'
    this.winner = ''

    this.board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ]
  }

}
