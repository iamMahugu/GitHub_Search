import { Directive,ElementRef,HostListener} from '@angular/core';


@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {
  @HostListener("mouseenter") onMouseEnter(){
    this.bgColor("#8469","white")
    }
  @HostListener("mouseleave") onMouseLeave(){
    this.bgColor(null,null)
  }
  constructor(private el:ElementRef) {
   }
   private bgColor(color:string,color1:string){
       this.el.nativeElement.style.backgroundColor=color;
       this.el.nativeElement.style.color=color1;
   }

}
