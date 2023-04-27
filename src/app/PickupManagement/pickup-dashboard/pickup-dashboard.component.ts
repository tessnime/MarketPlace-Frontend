import { Component } from '@angular/core';
import { PickupService } from 'projects/front-office/src/app/sellerMohsen/servicesM/pickup.service';

@Component({
  selector: 'app-pickup-dashboard',
  templateUrl: './pickup-dashboard.component.html',
  styleUrls: ['./pickup-dashboard.component.scss']
})
export class PickupDashboardComponent {
constructor(private pickupService:PickupService){}
ngOnInit(){
  this.countOfPickupDeliveredweekAdministrator();
  this.countPickupDeliveredTodayAdministrator();
  this.SumOfPricePickupDeliveredToday();
  this.countAllAgencyAdmin();
  this.getNumberOfPickupByStatus();
}
cpd!:number;
countPickupDeliveredTodayAdministrator(){
this.pickupService.countPickupDeliveredTodayAdministrator().subscribe(data=>{this.cpd=data});
}
cpd1!:number;
countOfPickupDeliveredweekAdministrator(){
this.pickupService.countOfPickupDeliveredweekAdministrator().subscribe(data=>{this.cpd1=data});
}
cpd2!:number;
SumOfPricePickupDeliveredToday(){
this.pickupService.SumOfPricePickupDeliveredToday().subscribe(data=>{this.cpd2=data});
}
cpd3!:any;
countAllAgencyAdmin(){
   this.pickupService.countAllAgencyAdmin().subscribe(data=>{this.cpd3=data});
}
cpd4!:any;
getNumberOfPickupByStatus(){
   this.pickupService.getNumberOfPickupByStatus().subscribe(data=>{this.cpd4=data;this.chart1()})
}
getNumberOfPickupByStatusByMonthAndYearAndAll(){
  this.pickupService.getNumberOfPickupByStatusByMonthAndYearAndAll().subscribe(data=>{this.cpd4=data;this.chart1()})
}
basicData: any;
basicOptions: any;
chart1(){
  const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.basicData = {
            labels: ['DELIVERED', 'TAKED', 'SHIPPED', 'RETURN','REFUNDED','PICKED'],
            datasets: [
                {
                    label: 'Pickups',
                    data: [this.cpd4.DELIVERED,this.cpd4.TAKED, this.cpd4.SHIPPED, this.cpd4.RETURN,this.cpd4.REFUNDED,this.cpd4.PICKED],
                    backgroundColor: ['rgba(255, 159, 64, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(153, 102, 255, 0.2)'],
                    borderColor: ['rgb(255, 159, 64)', 'rgb(75, 192, 192)', 'rgb(54, 162, 235)', 'rgb(153, 102, 255)'],
                    borderWidth: 1
                }
            ]
        };

        this.basicOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };
    }
}

