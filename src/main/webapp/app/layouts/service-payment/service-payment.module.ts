import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPayPalModule } from 'ngx-paypal';
import { ServicePaymentComponent } from 'app/layouts/service-payment/service-payment.component';

@NgModule({
  declarations: [ServicePaymentComponent],
  exports: [ServicePaymentComponent],
  imports: [CommonModule, NgxPayPalModule],
})
export class ServicePaymentModule {}
