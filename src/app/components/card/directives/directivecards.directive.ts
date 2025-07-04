import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: 'app-directive-title',
  host: { 'class': 'card-u-title'}
})
export class DirectiveTitle {
  @Input()
  @HostBinding('style.color') color = '';
}

@Directive({
  selector: 'app-directive-phragrafy',
  host: { 'class': 'card-u-phragrafy'}
})
export class DirectivePhragrafy {
  @Input()
  @HostBinding('style.color') color = '';
}
