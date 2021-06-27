import { Component, OnInit } from '@angular/core';
import { users } from './model/users';
import { UsersService } from './service/users.service';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
	columns: string[] = ["Name", "Acount Number", 'Country', 'Date Joined'];
	userData: users[] | undefined;
	loading = false;
	selectedIndex: any = -1;
	selectedObj = {};
	pageSizes: number[] = [5, 7, 10];
	pageSize = 5;
	pageObj = {
		pageNumber: 0,
		totalPages: 0,
		pageItems: []
	};
	constructor(private userservice: UsersService) {
	}

	ngOnInit() {
		this.selectedObj = {};
		this.getUsers();
	}
	getUsers() {

		this.loading = true;
		this.userservice.getUsers()
			.subscribe(
				(response) => {
					this.userData = response;
					this.pageObj = {
						pageNumber: 0,
						totalPages: Math.ceil(this.userData.length / this.pageSize),
						pageItems: []
					};
					this.nextPage();
				},
				(error) => {
					console.error('Request failed with error')
				},
				() => {
					this.loading = false;
				});
	}
	showTable(pageSize) {
		this.pageSize = pageSize;
		this.pageObj = {
			pageNumber: 0,
			totalPages: Math.ceil(this.userData.length / this.pageSize),
			pageItems: []
		};
		this.nextPage();
	}
	nextPage() {
		let pageNumber = this.pageObj.pageNumber + 1;
		let totalPages = this.pageObj.totalPages;
		if (totalPages >= pageNumber && this.userData.length > 0) {
			this.pageObj.pageNumber = pageNumber;
			this.pageObj.pageItems = this.userData.slice(
				pageNumber * this.pageSize - this.pageSize,
				pageNumber * this.pageSize
			);
		}
	}

	prevPage() {
		let pageNumber = this.pageObj.pageNumber - 1;
		if (pageNumber > 0 && this.userData.length > 0) {
			this.pageObj.pageNumber = pageNumber;
			this.pageObj.pageItems = this.userData.slice(
				pageNumber * this.pageSize - this.pageSize,
				pageNumber * this.pageSize
			);
		}
	}
	changeSelection(index: any, event: any) {
		if (event) {
			this.selectedIndex = index;
			this.selectedObj = this.userData[index];
		} else {
			this.selectedIndex = -1;
			this.selectedObj = {};
		}
	}
	GetChildData(data) {
		console.log(data);
		this.getUsers();
	}
}
