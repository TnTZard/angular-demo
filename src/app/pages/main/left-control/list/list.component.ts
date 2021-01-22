import {Component, Input, OnInit} from '@angular/core';
import {List} from '../../../../../domain/entities';
import {ListService} from '../../../../services/list/list.service';
import {TodoService} from '../../../../services/todo/todo.service';
import {NzModalService} from 'ng-zorro-antd/modal';
import {NzDropDownModule} from 'ng-zorro-antd/dropdown';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @Input() isCollapsed: boolean;

  lists: List[];
  currentListUuid: string;
  contextListUuid: string;
  addListModalVisible = false;
  renameListModalVisible = false;

  constructor(
    private listService: ListService,
    private todoService: TodoService,
    private modal: NzModalService
  ) { }

  ngOnInit(): void {
  }


  click(uuid: string): void {
    this.listService.setCurrentUuid(uuid);
  }

}
