import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { IEmployee } from '../_model/employee';

@Component({
  selector: 'app-static-emp-list',
  templateUrl: './static-emp-list.component.html',
  styleUrls: ['./static-emp-list.component.css']
})
export class StaticEmpListComponent implements OnInit {
  public employees: IEmployee[];
  public errorMessage: string;
  constructor(private _employeeService: EmployeeService) { }
  ngOnInit() {
    this.showEmployees();
  }

  showEmployees() {
    this._employeeService.getEmployees()
        .subscribe(data => this.employees = data,
                    error => this.errorMessage = error);
  }
}
