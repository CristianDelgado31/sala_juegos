import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-laberinto',
  templateUrl: './laberinto.component.html',
  styleUrls: ['./laberinto.component.css']
})
export class LaberintoComponent implements OnInit {
  snake: { x: number, y: number }[] = [{ x: 5, y: 5 }];
  food: { x: number, y: number } = this.generateFood();
  direction = { x: 0, y: 0 };
  gameInterval: any;
  score = 0;
  gameOver = false;

  ngOnInit() {
    this.startGame();
  }

  startGame() {
    this.gameOver = false;
    this.snake = [{ x: 5, y: 5 }];
    this.food = this.generateFood();
    this.direction = { x: 0, y: 0 };
    this.score = 0;

    this.gameInterval = setInterval(() => {
      if (!this.gameOver) {
        this.moveSnake();
        this.checkCollision();
        this.checkFood();
      }
    }, 100);
  }

  moveSnake() {
    const newHead = { x: this.snake[0].x + this.direction.x, y: this.snake[0].y + this.direction.y };
    this.snake.unshift(newHead);
    this.snake.pop(); // Eliminar la cola para mantener la longitud
  }

  checkCollision() {
    const head = this.snake[0];

    const boardSize = 25; // Número total de segmentos en una dirección

    // Verifica colisión con los límites
    if (head.x < 0 || head.x >= boardSize || head.y < 0 || head.y >= boardSize) {
      this.gameOver = true; // Colisión con las paredes
      clearInterval(this.gameInterval);
      return;
    }


    // Verifica colisión con el propio cuerpo
    for (let i = 1; i < this.snake.length; i++) {
      if (head.x === this.snake[i].x && head.y === this.snake[i].y) {
        this.gameOver = true; // Colisión con el propio cuerpo
        clearInterval(this.gameInterval);
        return;
      }
    }
  }

  checkFood() {
  if (this.snake[0].x === this.food.x && this.snake[0].y === this.food.y) {
    this.score++;
    
    // Aumenta la longitud de la serpiente
    const newSegment = { x: this.snake[this.snake.length - 1].x, y: this.snake[this.snake.length - 1].y };
    this.snake.push(newSegment);
    
    this.food = this.generateFood();
  }
}


  generateFood() {
    let newFood: { x: number, y: number };
    do {
      newFood = { x: Math.floor(Math.random() * 20), y: Math.floor(Math.random() * 20) };
    } while (this.snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }

  @HostListener('document:keydown', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    switch (event.key) {
      case 'ArrowUp': if (this.direction.y !== 1) this.direction = { x: 0, y: -1 }; break;
      case 'ArrowDown': if (this.direction.y !== -1) this.direction = { x: 0, y: 1 }; break;
      case 'ArrowLeft': if (this.direction.x !== 1) this.direction = { x: -1, y: 0 }; break;
      case 'ArrowRight': if (this.direction.x !== -1) this.direction = { x: 1, y: 0 }; break;
    }
  }
}
