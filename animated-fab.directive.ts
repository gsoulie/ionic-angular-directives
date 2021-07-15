import { AfterViewInit, Directive, HostListener, Input } from '@angular/core';
import { AnimationController, Animation } from '@ionic/angular';

@Directive({
  selector: '[appAnimatedFab]'
})
export class AnimatedFabDirective implements AfterViewInit {

  @Input('appAnimatedFab') fab: any;
  expanded = true;
  shrinkAnimation: Animation;

  constructor(private animationCtrl: AnimationController) { }

  // création d'un listener sur scroll
  @HostListener('ionScroll', ['$event']) onContentScroll($event: any) {
    if ($event.detail.deltaY > 0 && this.expanded) {
      // Scroll Down
      this.expanded = false;
      this.shrinkFab();

    } else if ($event.detail.deltaY < 0  && !this.expanded) {
      // Scroll UP
      this.expanded = true;
      this.expandFab();
    }
  }

  shrinkFab() {
    this.shrinkAnimation.direction('alternate').play();
  }

  expandFab() {
    this.shrinkAnimation.direction('reverse').play(); // jouer l'animation dans le sens inverse
  }

  setupAnimation() {
    const textSpan = this.fab.querySelector('span');

    // animation pour réduire la taille du fab-button
    const shrink = this.animationCtrl.create('shrink')
    .addElement(this.fab)
    .duration(400)
    .fromTo('width', '140px', '45px');

    // animation pour masquer le texte du bouton
    const fade = this.animationCtrl.create('fade')
    .addElement(textSpan)
    .duration(400)
    .fromTo('opacity', 1, 0)
    .fromTo('width', '70px', '0px');

    this.shrinkAnimation = this.animationCtrl.create('shrink-animation')
    .duration(400)
    .easing('ease-out')
    .addAnimation([shrink, fade]);
  }

  ngAfterViewInit(): void {
    this.fab = this.fab.el; // IMPORTANT sinon le fab button n'existe pas encore et on lève une erreur undefined sur le renderer
    this.setupAnimation();
  }

}
