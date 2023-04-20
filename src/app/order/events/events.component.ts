import {Component, OnInit} from '@angular/core';
import {Table} from "primeng/table";
import {MessageService} from "primeng/api";
import {EventModel} from "../../../../Models/EventModel";
import {FileUpload} from "primeng/fileupload";
import {map, Observable} from "rxjs";
import {HttpClient, HttpEventType, HttpRequest} from "@angular/common/http";
import {ServicesService} from "../services.service";
import {Product} from "../../../../Models/Product";
import {KeyWords} from "../../../../Models/KeyWords";

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [MessageService]
})
export class EventsComponent implements OnInit {

  NewEvent:EventModel =new EventModel();

  newKey:KeyWords =new KeyWords();

  selectedStartDate!:Date;

  selectedLastDate!:Date;

  productDialog: boolean = false;

  keyDialog: boolean = false;

  productDisplay: boolean = false;

  KeysDisplay: boolean = false;

  deleteProductDialog: boolean = false;

  deleteProductsDialog: boolean = false;

  deleteKeywordsDialog: boolean = false;

  products: EventModel[] = [];

  product: EventModel =new EventModel();

  selectedProducts: EventModel[] = [];

  selectedKeyWords: KeyWords[] = [];

  submitted: boolean = false;

  submittedKey: boolean = false;

  cols: any[] = [];

  statuses: any[] = [];

  rowsPerPageOptions = [5, 10, 20];

  uploadedFiles: any[] = [];

  constructor(private productService:ServicesService, private messageService: MessageService,private http: HttpClient) { }

  ngOnInit() {
    this.productService.displayAllEvents().subscribe(data => this.products = data);

    this.NewEvent.title='';
    this.cols = [
      { field: 'id', header: 'id' },
      { field: 'title', header: 'title' },
      { field: 'bandling', header: 'bandling' },
      { field: 'startDate', header: 'startDate' },
      { field: 'lastDate', header: 'lastDate' }
    ];

  }

  openNew() {
    this.product = new EventModel();
    this.submitted = false;
    this.productDialog = true;
  }

  openNewKey() {
    this.newKey = new KeyWords();
    this.submittedKey = false;
    this.keyDialog = true;
  }

  deleteSelectedProducts() {
    this.deleteProductsDialog = true;
    for (let i=0;i<this.selectedProducts.length;i++)
    {
      this.productService.deleteEvent(this.selectedProducts[i].id).subscribe();
    }
  }
  deleteSelectedKeywords() {
    this.deleteKeywordsDialog = true;
    for (let i=0;i<this.selectedKeyWords.length;i++)
    {
      this.productService.deleteKeywordFromEvent(this.idEv,this.selectedKeyWords[i].id).subscribe();
    }
  }

  editProduct(product: EventModel) {
    this.product = { ...product };
    this.NewEvent.id=this.product.id;
    this.productDialog = true;
  }

  deleteProduct(product: EventModel) {
    this.deleteProductDialog = true;
    this.product = { ...product };
    this.productService.deleteEvent(product.id).subscribe();
  }

  confirmDeleteSelected() {
    this.deleteProductsDialog = false;
    this.products = this.products.filter(val => !this.selectedProducts.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Events Deleted', life: 3000 });
    this.selectedProducts = [];
  }
  confirmDeleteSelectedKeys() {
    this.deleteProductsDialog = false;
    this.keywordsList = this.keywordsList.filter(val => !this.selectedKeyWords.includes(val));
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Keywords Deleted', life: 3000 });
    this.selectedKeyWords = [];
  }

  confirmDelete() {
    this.deleteProductDialog = false;
    this.products = this.products.filter(val => val.id !== this.product.id);
    this.messageService.add({ severity: 'success', summary: 'Successful', detail: 'Product Deleted', life: 3000 });
    this.product = new EventModel();
  }

  hideDialog() {
    this.productDialog = false;
    this.submitted = false;
  }
  hideKeyDialog() {
    this.keyDialog = false;
    this.submittedKey = false;
  }

  saveProduct() {
    if(this.selectedFile!=null) {
      this.onUpload();
      this.submitted = true;
      this.NewEvent.bandLing=this.selectedFile.name;
      if (this.NewEvent.title?.trim()) {
        if (this.NewEvent.id) {
          // @ts-ignore
          this.products[this.findIndexById(this.NewEvent.id)] = this.NewEvent;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Event Updated', life: 3000});
        } else {
          // @ts-ignore
          this.products.push(this.NewEvent);
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Event Created', life: 3000});
        }

        this.products = [...this.products];
        this.productDialog = false;
        this.productService.addEvent(this.NewEvent).subscribe();
        this.NewEvent = new EventModel();
      }


    }
  }


  saveKey() {

      if (this.newKey.word?.trim()) {
        if (this.newKey.id) {
          // @ts-ignore
          this.keywordsList[this.findIndexById(this.newKey.id)] = this.NewEvent;
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Event Updated', life: 3000});
        } else {
          // @ts-ignore
          this.keywordsList.push(this.newKey);
          this.messageService.add({severity: 'success', summary: 'Successful', detail: 'Event Created', life: 3000});
        }

        this.keywordsList = [...this.keywordsList];
        this.keyDialog = false;
        this.productService.addKeywordToEvent(this.idEv,this.newKey).subscribe();
        this.newKey = new KeyWords();
      }


  }

  findIndexById(id: number): number {
    let index = -1;
    for (let i = 0; i < this.products.length; i++) {
      if (this.products[i].id === id) {
        index = i;
        break;
      }
    }

    return index;
  }

  createId(): string {
    let id = '';
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < 5; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return id;
  }

  onGlobalFilter(table: Table, event: Event) {
    table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }

  selectedFile!: File | null | undefined;
  handleFileInput(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    this.selectedFile = inputElement.files?.item(0);
  }

  onUpload() {
    this.productService.upload(this.selectedFile).subscribe(
      response => {
        console.log(response);
      }
    );
  }


  productsDisp:Product[]=[];
  keywordsList:KeyWords[]=[];

  displayProducts(product: EventModel)
  {
    this.productsDisp=product.productList;
    this.productDisplay = true;
  }
idEv:number=0;
  displayKeyWords(product: EventModel)
  {
    this.idEv=product.id;
    this.keywordsList=product.listkeyWords;
    this.KeysDisplay= true;
  }

  keyWord:KeyWords=new KeyWords();
  deleteKeyword(key:KeyWords)
  {
    this.deleteKeywordsDialog = true;
    this.keyWord = { ...key };
    this.productService.deleteKeywordFromEvent(this.idEv,key.id).subscribe();
  }

  carouselResponsiveOptions: any[] = [
    {
      breakpoint: '1024px',
      numVisible: 3,
      numScroll: 3
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 2
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];
}
