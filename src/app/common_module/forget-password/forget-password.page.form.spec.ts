import { FormBuilder, FormGroup } from "@angular/forms"
import { ForgetpasswordPageForm } from "./forget-password.page.form";

describe('ForgetpasswordPageForm',() =>{
    let forgetpasswordPageForm:ForgetpasswordPageForm;
    let form:FormGroup;

    beforeEach(() =>{
        forgetpasswordPageForm= new ForgetpasswordPageForm(new FormBuilder());
        form =forgetpasswordPageForm.createForm();
    })
    it('should create login form empty',() =>{
        const PageForm= new ForgetpasswordPageForm(new FormBuilder)
        const form=forgetpasswordPageForm.createForm();

        expect(form).not.toBeNull();
        expect(form.get('email')).not.toBeNull();
        expect(form.get('email').value).toEqual("");
        

    })
    it('should have email invalid if email is not valid', () => {
        form.get('email').setValue('invalid email');

        expect(form.get('email').valid).toBeFalsy();
    })
    it('should have email valid if email is valid', () => {
        form.get('email').setValue('valid@email.com');

        expect(form.get('email').valid).toBeTruthy();
    })
    it('should have a valid form', () => {
        form.get('email').setValue('valid@email.com');
        

        expect(form.valid).toBeTruthy();
    }) 
})