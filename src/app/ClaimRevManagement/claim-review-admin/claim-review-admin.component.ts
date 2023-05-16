import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClaimServiceService} from "../claimservice/claim-service.service";
import {claimStatsModel} from "../../../../Models/ClaimStatsModel";
import {Table} from "primeng/table";
import {ClaimSav} from "../../../../Models/ClaimSav";
import {ClaimSavStatusType} from "../../../../Models/Enum/ClaimSavStatusType";
import {LayoutService} from "../../layoutB/service/app.layout.service";
import {Subscription} from "rxjs";
import { BadWords } from 'Models/BadWords';
import { GoodFeelings } from 'Models/GoodFeelings';
import { BadFeelings } from 'Models/BadFeelings';


@Component({
  selector: 'app-claim-review-admin',
  templateUrl: './claim-review-admin.component.html',
  styleUrls: ['./claim-review-admin.component.scss']
})
export class ClaimReviewAdminComponent implements OnInit{

  constructor(private service:ClaimServiceService) {
  }

  breadcrumbItems=[
    {'label':'HOME'},
    {'label':'CLAIM'},
    {'label':'DASHBOARD'},
  ]

  APPROVED:number=0;
  REJECTED:number=0;
  NONTRAITE:number=0;
  COMPLETED:number=0;
  leng:number=0;

  stats:claimStatsModel[]=[]
  claims:ClaimSav[]=[];
  badwords:BadWords[]=[];
  goodfeeling:GoodFeelings[]=[];
  badfeeling:BadFeelings[]=[];
  ngOnInit(): void {


    this.service.getClaims().subscribe(da=>{

      this.claims=da;



    this.service.ClaimStats().subscribe(
      data=>{
        this.stats=data;

        for (let i=0;i<this.stats.length;i++)
        {
          if(this.stats[i].status=="APPROVED")
            this.APPROVED=this.stats[i].nb;
          if(this.stats[i].status=="REJECTED")
            this.REJECTED=this.stats[i].nb;
          if(this.stats[i].status=="NONTRAITE")
            this.NONTRAITE=this.stats[i].nb;

        }
        this.leng=this.APPROVED+this.NONTRAITE+this.REJECTED;
        this.COMPLETED=this.APPROVED+this.REJECTED

    }
    );
      }
    )
    this.service.getAllBadWords().subscribe(
      badwords => {
        this.badwords = badwords;
        console.log(this.badwords);
      },
      error => {
        console.error(error);
      }
    );
    this.getAllGoodFeelings();
    this.getAllBadFeelings();
  }
  refresh() {
    const currentUrl = window.location.href;
    // @ts-ignore
    window.history.replaceState(null, null, currentUrl);
    window.location.reload();
    window.scroll(0,0);
  }

  onSort() {
    this.updateRowGroupMetaData();
  }

  updateClaim(st:string,id:number) {
    this.service.UpdateClaim(st, id).subscribe(data => {
      this.refresh();
    });
  }

  isExpanded: boolean = false;
  rowGroupMetadata: any;
  updateRowGroupMetaData() {
    this.rowGroupMetadata = {};

    if (this.claims) {
      for (let i = 0; i < this.claims.length; i++) {
        const rowData = this.claims[i];
        const representativeName = rowData?.user?.firstName || '';

        if (i === 0) {
          this.rowGroupMetadata[representativeName] = { index: 0, size: 1 };
        }
        else {
          const previousRowData = this.claims[i - 1];
          const previousRowGroup = previousRowData?.user?.firstName;
          if (representativeName === previousRowGroup) {
            this.rowGroupMetadata[representativeName].size++;
          }
          else {
            this.rowGroupMetadata[representativeName] = { index: i, size: 1 };
          }
        }
      }
    }
  }

  statuses!:ClaimSavStatusType;
  representatives: ClaimSav[] = [];

  @ViewChild('filter') filter!: ElementRef;

  clear(table: Table) {
    table.clear();
    this.filter.nativeElement.value = '';
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  addgood:GoodFeelings=new GoodFeelings();
  addGoodFeeling() {

    this.service.addNewGoodFeelings(this.addgood).subscribe(
      response => {console.log(response),
        this.refresh();
      },
      error => console.error(error)
    );
  }


add:BadWords=new BadWords();
addBadWord() {
  this.service.addBadWord(this.add).subscribe(
    response => {
      console.log('Bad word added successfully!');
      this.refresh();
    },
    error => console.log('Error adding bad word', error)
  );
}

getAllGoodFeelings(){
  this.service.getAllGoodFeelings().subscribe(
    goodfeeling=>{this.goodfeeling=goodfeeling
      console.log(this.goodfeeling)
    },
    error => {
      console.error(error);
    }
  )
}


  deleteBadWord(id: number) {
    this.service.deleteBadWord(id).subscribe(
      response => {console.log('Bad word deleted successfully!'),
      this.refresh();
    },
    error => console.log('Error deleting bad word', error)
    );
  }

  deleteGoodFeelings(id: number){
    this.service.deleteGoodFeelings(id).subscribe(
      response=>{console.log('good feelings deleted successfully!'),
      this.refresh();

      },
      error => console.log('error deleting good feelings',error)
    );
  }

  deleteBadFeelings(id: number){
    this.service.deleteBadFeelings(id).subscribe(
      response=>{console.log('bad feelings deleted successfully!'),
      this.refresh();

      },
      error => console.log('error deleting bad feelings',error)
    );
  }

  addbad:BadFeelings=new BadFeelings();
  addBadFeelings(){
    this.service.addNewBadFeelings(this.addbad).subscribe(
      response => {
        console.log('Bad feeling added successfully!');
        this.refresh();
      },
      error => console.log('Error adding bad feeling', error)
    );

    }

    getAllBadFeelings(){
      this.service.getAllBadFeelings().subscribe(
        badfeeling=>{this.badfeeling=badfeeling
          console.log(this.badfeeling)
        },
        error => {
          console.error(error);
        }
      )
    }
}
