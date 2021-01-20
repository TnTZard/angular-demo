import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SetupComponent } from './setup.component';
import {NzInputModule} from 'ng-zorro-antd/input';
import {NzButtonModule} from 'ng-zorro-antd/button';
import {FormsModule} from '@angular/forms';



@NgModule({
  declarations: [SetupComponent],
    imports: [
        CommonModule,
        NzInputModule,
        NzButtonModule,
        FormsModule
    ]
})
export class SetupModule { }
