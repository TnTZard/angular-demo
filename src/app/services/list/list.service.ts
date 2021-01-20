import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { List } from '../../../domain/entities';
import { LISTS } from '../local-storage/local-storage.namespace';


type SpecialListUUID = 'today' | 'todo';

/**
 *
 * 考虑到左右两边具有联动关系
 * 所以我们不能让ListComponent来管理List
 * 而应当交给ListService来做
 *
 */

@Injectable({
  providedIn: 'root'
})
export class ListService {


  private current: List;
  private lists: List[] = [];

  currentUuid: SpecialListUUID | string = 'today';
  currentUuid$ = new Subject<string>();
  current$ = new Subject<List>();
  lists$ = new Subject<List[]>();

  constructor(private store: LocalStorageService) { }

  private broadCast(): void {
    this.lists$.next(this.lists);
    this.current$.next(this.current);
    this.currentUuid$.next(this.currentUuid);
  }


}
