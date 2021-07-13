import { Directive, HostListener, Input, Renderer2 } from '@angular/core';
import { DomController } from '@ionic/angular';

enum Direction {
  UP = 1,
  DOWN = 0
}

@Directive({
  selector: '[appHideHeader]'
})
export class HideHeaderDirective {

  @Input('appHideHeader') header: any;
  saveY = 0;
  previousY = 0;
  direction: Direction = Direction.DOWN;
  readonly scrollDistance = 50; // distance à partir de laquelle la carte doit fade-in / fade-out

  constructor(private renderer: Renderer2, private domCtrl: DomController) { }

  // Create listener on scroll event. Be sure to activate scrollEvents="true" on ion-content
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {

    // Specials cases like scroll over the limit like bounce efffect on iOS etc...
    if ($event.detail.currentY <= 0 || $event.detail.currentY == this.saveY) {
      return; // We do not take care of these cases
    }

    const scrollTop: number = $event.detail.scrollTop;
    let newDirection = Direction.DOWN;
    let newPosition = -scrollTop + this.previousY;

    if (this.saveY > $event.detail.currentY) {
      // scroll up
      newDirection = Direction.UP;
      // lorsque'on change de sens la nouvelle position revient à 0. On souhaite repartir de -50
      newPosition -= this.scrollDistance;
    }

    // new position between 0 and 50 or 0 and -50
    if (newPosition < -this.scrollDistance) {
      newPosition = -this.scrollDistance;
    }

    // Calculate the new opacity
    let newOpacity = 1 - (newPosition / -this.scrollDistance);

    this.domCtrl.write(() => {
      this.renderer.setStyle(this.header, 'top', Math.min(0, newPosition) + 'px');
      this.renderer.setStyle(this.header, 'opacity', newOpacity);
    });


    this.saveY = $event.detail.currentY;

    // Did we change direction ?
    if (this.direction != newDirection) {
      this.direction = newDirection;
      this.previousY = scrollTop;
    }
  }
}
