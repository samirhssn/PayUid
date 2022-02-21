import { FormBuilder, FormGroup } from "@angular/forms";
import { AddaccountPageForm } from "./addaccount.page.form"

describe('AddaccountPageForm', () =>{

    let addaccountPageForm:AddaccountPageForm;
    let form: FormGroup;
    beforeEach(() =>{
        addaccountPageForm = new AddaccountPageForm(new FormBuilder());
        form = addaccountPageForm.getForm();
    })

    it('should empty  first name be invalid',()=>{
        expect(form.get('firstname').valid).toBeFalsy();
    })
    it('should empty lastname be invalid', () => {
        expect(form.get('lastname').valid).toBeFalsy();
    })

    it('should empty accountnumber be invalid', () => {
        expect(form.get('accountnumber').valid).toBeFalsy();
    })

    it('should empty conformaccountnumber be invalid', () => {
        expect(form.get('conformaccountnumber').valid).toBeFalsy();
    })
    it('should empty IFSCcode be invalid', () => {
        expect(form.get('IFSCcode').valid).toBeFalsy();
    })
    it('should empty bankname be invalid', () => {
        expect(form.get('bankname').valid).toBeFalsy();
    })
    it('should empty branchname be invalid', () => {
        expect(form.get('branchname').valid).toBeFalsy();
    })

    it('should empty address  be invalid', () => {
        expect(form.get('address').valid).toBeFalsy();
    })

    it('should password less than 13 characters be invalid', () => {
        form.get('accountnumber').setValue('123456789');

        expect(form.get('accountnumber').valid).toBeFalsy();
    })

    it('should account number  different from conform account number be invalid', () => {
        form.get('').setValue('anyaccountnumber');
        form.get('conformaccountnumber').setValue('anotheraccountnumber');
        
        expect(form.get('conformaccountnumber').valid).toBeFalsy();
    })

    it('should form be valid', () => {
        form.get('firstname').setValue("anyFirstName");
        form.get('lastname').setValue("anyLastName");
        form.get('accountnumber').setValue("anyAccountnumber");
        form.get('conformaccoutnnumber').setValue("anyAccountnumber");
        form.get('IFSCcode').setValue("anyIFSCcode");
        form.get('bankname').setValue("anyBankname");
        form.get('branchname').setValue("anyBranchname")
        form.get('address').setValue("any address");
        

        expect(form.valid).toBeTruthy();
    })
})