import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('inputName',{static:false}) IName: ElementRef;
  @ViewChild('inputAmt',{static:false}) IAmt: ElementRef;
  @Output() OnIngAdded=new EventEmitter<Ingredient>();

  constructor() { }

  ngOnInit(): void {
  }
ingridentadded()
{
  const ingName= this.IName.nativeElement.value;
  const ingAmt=this.IAmt.nativeElement.value;
  const newIng=new Ingredient(ingName,ingAmt);
  this.OnIngAdded.emit(newIng);

}
}
