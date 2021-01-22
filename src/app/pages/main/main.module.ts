import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { MainRoutingModule } from './main-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { LeftControlComponent } from './left-control/left-control.component';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {NzIconModule} from 'ng-zorro-antd/icon';
import { ListComponent } from './left-control/list/list.component';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';


@NgModule({
  declarations: [MainComponent, LeftControlComponent, ListComponent],
    imports: [
        CommonModule,
        MainRoutingModule,
        NzLayoutModule,
        NzButtonModule,
        NzIconModule,
        NzDropDownModule,
    ]
})
export class MainModule { }
