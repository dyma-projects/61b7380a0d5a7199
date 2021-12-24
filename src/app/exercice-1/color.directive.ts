import { Directive, ElementRef, HostListener } from "@angular/core";

@Directive({
  selector: "[appColor]",
})
export class ColorDirective {
  keyMap: Map<String, String> = new Map<String, String>([
    ["ArrowLeft", "red"],
    ["ArrowUp", "blue"],
    ["ArrowRight", "green"],
    ["ArrowDown", "yellow"],
  ]);

  constructor(private el: ElementRef) {}

  ngOnInit(): void {}

  @HostListener("window:keydown", ["$event"]) onKeyPress(
    e: KeyboardEvent
  ): void {
    this.changeColor(this.keyMap.get(e.key).toString());
  }

  private changeColor(color: string): void {
    this.el.nativeElement.style.color = color;
  }
}
