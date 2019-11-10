import { Component } from '@angular/core';
import { ApiListing } from '../services/api.service';
import { PickerController } from '@ionic/angular';
import { PickerColumn } from '@ionic/core/dist/types/components/picker/picker-interface';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userList: any[] = [];
  public test: PickerColumn[] = [
    /*   {
      name: 'indra',
      options: [
        {
          text: 'indra1',
          value: 1,
        },
        {
          text: 'indra2',
          value: 2,
        },
        {
          text: 'indra3',
          value: 3,
        },
        {
          text: 'indra4',
          value: 4,
        },
        {
          text: 'indra5',
          value: 5,
        },
        {
          text: 'indra6',
          value: 6,
        },
      ],
    }, */
    {
      name: 'Alexa',
      options: [
        {
          text: 'Alexa',
          value: 2,
        },
      ],
    },
  ];
  constructor(private _api: ApiListing, private _picker: PickerController) {}

  ngOnInit(): void {
    this._api.getUsers().subscribe(users => {
      console.log(users);
      this.userList = users;
    });
  }

  async openPicker() {
    const picker = await this._picker.create({
      columns: this.test,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
        },
        {
          text: 'Confirm',
          handler: value => {
            console.log('confirmed pressed', value);
          },
        },
      ],
    });
    picker.present();
  }
}
