import {Component,OnInit} from '@angular/core';
import {User}from '../shared/user.model';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-sign-up',
    templateUrl: './SignUp.Component.html',
    styleUrls: ['./SignUp.Component.css']
})

export class SignUpComponent implements OnInit {
    user: User;
    constructor() { }
    OnInit() {
        this.resetForm();
    }

    resetForm(form: NgForm) {
        if(form!=null)
        form.reset();
        this.user = {
            Username: '',
            Password: '',
            Email: '',
            FirstName: '',
            LastName : ''

        }

    }
}

