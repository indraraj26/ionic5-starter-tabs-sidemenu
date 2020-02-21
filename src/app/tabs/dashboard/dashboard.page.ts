import { ModalPage } from "./../../modal/modal.page";
import { Component, OnInit } from "@angular/core";
import { IonRouterOutlet, ModalController } from "@ionic/angular";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"]
})
export class DashboardPage implements OnInit {
  constructor(
    private routerOutlet: IonRouterOutlet,
    private modalController: ModalController
  ) {}

  ngOnInit() {}

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      swipeToClose: true,
      animated: true,
      presentingElement: this.routerOutlet.nativeEl // Get the top-most ion-modal
    });
    return await modal.present();
  }
}
