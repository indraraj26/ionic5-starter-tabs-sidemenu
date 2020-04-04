import {
	Component,
	OnInit,
	ViewChild,
	ElementRef,
	ChangeDetectorRef,
	ChangeDetectionStrategy,
	Renderer2,
} from '@angular/core';
import { GestureController } from '@ionic/angular';
import { Gesture } from '@ionic/core';

@Component({
	selector: 'app-trending',
	templateUrl: './trending.page.html',
	styleUrls: ['./trending.page.scss'],
	animations: [],
})
export class TrendingPage implements OnInit {
	counter = 0;
	swipeGesture: Gesture;
	@ViewChild('contentElement', { static: true, read: ElementRef })
	contentElement: ElementRef;

	constructor(
		private gestureController: GestureController,
		private _renderer2: Renderer2,
	) {}

	ngOnInit() {}

	ionViewDidEnter() {
		console.log('trigger');
		this.swipeGesture = this.gestureController.create({
			el: this.contentElement.nativeElement,
			gestureName: 'swipe',
			onStart: (ev) => {
				// do something as the gesture begins
				console.log(ev);
				this._renderer2.setStyle(
					this.contentElement.nativeElement,
					'transform',
					'translateX(300px)',
				);
			},
			onMove: (ev) => {
				// do something in response to movement
				console.log(ev);
			},
			onEnd: (ev) => {
				// do something when the gesture ends
				console.log(ev);
				this._renderer2.setStyle(
					this.contentElement.nativeElement,
					'transform',
					'translateX(0)',
				);
			},
		});
		this.swipeGesture.enable();
	}
}
