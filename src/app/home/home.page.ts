import { Component, OnInit } from '@angular/core';
import { PickerController } from '@ionic/angular';

@Component({
	selector: 'app-home',
	templateUrl: './home.page.html',
	styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
	public timeSlot: any[] = [
		{
			name: 'Timeslot',
			options: [
				{
					text: '10am-11am',
					value: 1,
				},
				{
					text: '11am-12pm',
					value: 2,
				},
				{
					text: '1pm-2pm',
					value: 3,
				},
				{
					text: '2pm-3pm',
					value: 4,
				},
				{
					text: '4pm-5pm',
					value: 5,
				},
			],
		},
	];

	constructor(private _picker: PickerController) {}

	ngOnInit() {}

	async openPicker() {
		const picker = await this._picker.create({
			columns: this.timeSlot,
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
				},
				{
					text: 'Confirm',
					handler: (value) => {
						console.log('confirmed pressed', value);
					},
				},
			],
		});

		picker.present();
	}
}
