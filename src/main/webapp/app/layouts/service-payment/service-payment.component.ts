import { Component, OnInit } from '@angular/core';
import { IPayPalConfig, ICreateOrderRequest } from 'ngx-paypal';
@Component({
  selector: 'jhi-service-payment',
  templateUrl: './service-payment.component.html',
  styleUrls: ['./service-payment.component.scss'],
})
export class ServicePaymentComponent implements OnInit {
  public payPalConfig?: IPayPalConfig;
  public showSuccess = true;
  public order: any;
  constructor() {}
  ngOnInit(): void {
    this.initConfig();
  }
  public getPackage() {}
  public initConfig(): void {
    this.payPalConfig = {
      clientId: 'AUhE1PVR_p5RwD-Rdvd9uD0zV_cSrJ6c933Hlmr3Dnls7KhpbS0Cfsn8uunzo_UIySZ5nv_HBCgbJqW2',
      createOrderOnClient: (data: any): any => {
        this.order = {
          intent: 'CAPTURE',
          purchase_units: [
            {
              description: 'Paquete publicitario para subastas y promoción de alquiler',
              amount: {
                currency_code: 'USD',
                value: '1',
                breakdown: {
                  item_total: {
                    currency_code: 'USD',
                    value: '1',
                  },
                },
              },
              items: [
                {
                  sku: 'Hola',
                  name: 'Subscription a paquete de publicidad',
                  quantity: '1',
                  category: 'DIGITAL_GOODS',
                  unit_amount: {
                    currency_code: 'USD',
                    value: '1',
                  },
                },
              ],
            },
          ],
        } as ICreateOrderRequest;
        return this.order;
      },
      advanced: {
        commit: 'true',
      },
      style: {
        label: 'paypal',
        layout: 'vertical',
      },
      onApprove: (data: any, actions: any): void => {
        this.showSuccess = true;
        actions.order.get().then((details: any) => {});
      },
      onClientAuthorization: (data: any): void => {
        this.showSuccess = true;
      },
      onCancel: (data: any, actions: any): void => {
        this.showSuccess = false;
      },
      onError: (err): void => {
        this.showSuccess = false;
      },
      onClick: (data: any, actions: any): void => {
        this.showSuccess = true;
      },
    };
  }
}
