import { Component, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.page.html",
  styleUrls: ["./modal.page.scss"]
})
export class ModalPage implements OnInit {
  constructor(private _modalController: ModalController) {}

  ngOnInit() {}

  onClose() {
    this._modalController.dismiss();
  }
}
