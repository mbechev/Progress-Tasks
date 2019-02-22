import { GridDataResult, PageChangeEvent } from '@progress/kendo-angular-grid';
import { UsersService } from './../service/user.service';
import { Component } from '@angular/core';
import { SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-kendo-grid',
  styleUrls: ['./grid.component.css'],
  templateUrl: './grid.component.html',
})
export class GridComponent {
  public gridData: GridDataResult;
  public sort: SortDescriptor[] = [{
    field: 'name',
    dir: 'asc'
  }];
  public users: any[];
  public pageSize = 5;
  public skip = 0;
  private columns = ['id', 'name', 'username', 'email', 'website'];
  public hiddenColumns: string[] = [];

  constructor(private usersService: UsersService) {
    this.usersService.getUsersData().subscribe((respondedData) => {
      this.users = respondedData;
      this.pagingUsers();
    });
  }
  getUsersByPage() {
    return this.users.slice(this.skip, this.skip + this.pageSize);
  }


  // Paging functioanllity
  private pageChange({ skip, take }: PageChangeEvent): void {
    this.skip = skip;
    this.pageSize = take;
    this.pagingUsers();
  }

  private pagingUsers(): void {
    this.gridData = {
      data: this.getUsersByPage(),
      total: this.users.length
    };
  }

  // Sort functionallity
  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadUsers();
  }

  private loadUsers(): void {
    this.gridData = {
      data: orderBy(this.getUsersByPage(), this.sort),
      total: this.users.length
    };
  }

  // Hide columns functionallity
  public restoreColumns(): void {
    this.hiddenColumns = [];
  }

  public hideColumn(field: string): void {
    this.hiddenColumns.push(field);
  }
}
