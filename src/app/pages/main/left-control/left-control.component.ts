import {
  Component,
  OnInit,
  Input,
  TemplateRef,
  OnDestroy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { LocalStorageService } from '../../../services/local-storage/local-storage.service';
import { USERNAME } from '../../../services/local-storage/local-storage.namespace';
import { List } from '../../../../domain/entities';
import { ListService } from '../../../services/list/list.service';
import { TodoService } from '../../../services/todo/todo.service';

@Component({
  selector: 'app-left-control',
  templateUrl: './left-control.component.html',
  styleUrls: ['./left-control.component.scss']
})
export class LeftControlComponent implements OnInit {

  @Input() isCollapsed: boolean;

  username: string;

  constructor(
    private store: LocalStorageService
  ) { }

  ngOnInit(): void {
    this.username = this.store.get(USERNAME);
  }

}
