import {Component, ViewChild} from '@angular/core';

export interface Point {
  coords: number[]
  weight: number
}

@Component({
  selector: 'app-main-layout',
  standalone: true,
  templateUrl: './main-layout.component.html',
  styleUrl: './main-layout.component.scss'
})
export class MainLayoutComponent {
  canvas!: HTMLCanvasElement;
  isLoadImage = false

  @ViewChild('pieCanvas') pieCanvas!: { nativeElement: HTMLCanvasElement };

  constructor() {
  }

  ngAfterViewInit(): void {
    this.draw();
  }

  draw(): void {
    this.canvas = this.pieCanvas.nativeElement;
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    const img = new Image();
    img.src = 'zabava.png'

    img.onload = function() {
      ctx.fillStyle = ctx.createPattern(img, "repeat") as CanvasPattern
      ctx.fillRect(0, 0, 900, 600);
      ctx.strokeRect(0, 0, 900, 600);

      // const sizePoint = 1
      //
      // for (let x = 0; x < 900/sizePoint; x++) {
      //   for (let y = 0; y < 600/sizePoint; y++) {
      //     ctx.globalAlpha = 0.9 * Math.sin(x * 3.14 / 900) * Math.sin(y * 3.14 / 600)
      //     ctx.fillStyle = `hsl(${x * sizePoint * 180 / 900 + y * sizePoint * 180 / 900}, 100%, 50%)`;
      //     ctx.fillRect(x * sizePoint, y * sizePoint, sizePoint, sizePoint)
      //   }
      // }
    }
  }

  onMouseEvent(event: MouseEvent) {
    const ctx = this.canvas.getContext('2d') as CanvasRenderingContext2D;

    ctx.globalAlpha = 0.1
    ctx.fillStyle = `hsl(${0}, 100%, 50%)`;
    ctx.fillRect(event.offsetX - 5, event.offsetY - 5, 10, 10)
  }
}
