import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pickup } from 'Models/Pickup';
import { PickupService } from '../servicesM/pickup.service';
import 'jspdf-autotable';

import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { map } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-pickup-list',
  templateUrl: './pickup-list.component.html',
  styleUrls: ['./pickup-list.component.scss']
})
export class PickupListComponent {
  constructor(private pickupService:PickupService,private http:HttpClient,private route:Router,private snackBar: MatSnackBar){}
  ngOnInit() {
    this.getPickupData();
  }

  getPickupData() {
    this.pickupService.GetPickupBySellerWaiting()
      .subscribe((data: Pickup[]) => {
        this.pickup = data;
        this.totalItems = data.length;
      });
  }

  onPageChange(event: any): void {
    this.p = event;
    this.getPickupData();
  }
  pickup!:Pickup[];
  totalItems = 0;
  p = 1; // current page number
  itemsPerPage = 6; // number of items to display per page

  DeletePickup(idPickup: number) {
    // Call the pickup service to delete the pickup
    this.pickupService.DeletePickup(idPickup)
      .subscribe(() => {
        // Call the method to refresh the table data
        this.getPickupData();
        // Show a notification to indicate the pickup was deleted successfully
        this.snackBar.open('The pickup Delated with success!', 'Close', {
          duration: 3000,
          verticalPosition: 'top',
          horizontalPosition: 'end',
          panelClass : ['green-snackbar'],
        });
      })
  }
  pickup1!:Pickup;
  GetPickupById(idPickup:number){
   this.pickupService.GetPickupById(idPickup).subscribe(data=>{this.pickup1=data});
  }
  generatePDF(idPickup:number) {
    this.pickupService.GetPickupById(idPickup).subscribe(data=>{this.pickup1=data});
    const doc = new jsPDF.default();
    const tableRows = [];

    // Define the pickup PDF layout
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const margin = 10;
    const lineHeight = 7;

    // Draw the pickup information
    doc.setFontSize(12);

    doc.text('PICKUP SLIP', margin, margin + lineHeight);

    doc.setFontSize(10);


      doc.text(`Store Name: ${this.pickup1.store.name} ${this.pickup1.order.buyer.lastName}`, margin, margin + lineHeight * 8);
      doc.text(`Store phone number: ${this.pickup1.store.seller.phoneNumber}`, margin, margin + lineHeight * 9);
      doc.text(`Code: ${this.pickup1.codePickup}`, margin, margin + lineHeight * 2);
      doc.text(`Date: ${this.pickup1.dateCreationPickup}`, margin, margin + lineHeight * 3);
      doc.text(`Recipient: ${this.pickup1.order.buyer.firstName} ${this.pickup1.order.buyer.lastName}`, margin, margin + lineHeight * 4);
      doc.text(`Recipient phone number: ${this.pickup1.order.buyer.phoneNumber}`, margin, margin + lineHeight * 5);
      doc.text(`Address: ${this.pickup1.governorate}`, margin, margin + lineHeight * 6);
      doc.text(`City/State/Zip: ${this.pickup1.city}, ${this.pickup1.availableDeliver} `, margin, margin + lineHeight * 7);
      doc.setFontSize(10);


    // Draw the pickup label
    doc.setFillColor(204, 204, 204);
    doc.rect(width - margin - 70, margin, 70, 70, 'F');
    doc.setFontSize(16);

    doc.text('PICKUP', width - margin - 60, margin + 25);
    doc.text('SLIP', width - margin - 60, margin + 40);

    // Save the PDF
    doc.save(`mypdf_${this.pickup1.codePickup}.pdf`);

  }
  generatePDF3() {
    this.pickup.forEach((p) => {
      const doc = new jsPDF.default();
      const tableRows = [];

      // Define the pickup PDF layout
      const width = doc.internal.pageSize.getWidth();
      const height = doc.internal.pageSize.getHeight();
      const margin = 10;
      const lineHeight = 7;

      // Draw the pickup information
      doc.setFontSize(12);

      doc.text('PICKUP SLIP', margin, margin + lineHeight);

      doc.setFontSize(10);

      const pickup = [
        doc.text(`Code: ${p.codePickup}`, margin, margin + lineHeight * 2),
        doc.text(`Date: ${p.dateCreationPickup}`, margin, margin + lineHeight * 3),
        doc.text(`Recipient: ${p.order.buyer.firstName}`, margin, margin + lineHeight * 4),
        doc.text(`Address: ${p.governorate}`, margin, margin + lineHeight * 5),
        doc.text(`City/State/Zip: ${p.city}, ${p.availableDeliver}`, margin, margin + lineHeight * 6)
      ];

      // Draw the pickup label
      doc.setFillColor(204, 204, 204);
      doc.rect(width - margin - 70, margin, 70, 70, 'F');
      doc.setFontSize(16);

      doc.text('PICKUP', width - margin - 60, margin + 25);
      doc.text('SLIP', width - margin - 60, margin + 40);

      // Save the PDF
      doc.save(`mypdf_${p.codePickup}.pdf`);
    });
  }
}


