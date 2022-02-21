import { FormBuilder, FormGroup, ValidatorFn, Validators } from "@angular/forms";

export class AddaccountPageForm{
    
    private formBulider: FormBuilder;
    private form:FormGroup;
   
    constructor(formBulider:FormBuilder){
        this.formBulider = formBulider;
        this.form = this.createForm();
    }
    private createForm():FormGroup{
        let form =this.formBulider.group({
            firstname:['',[Validators.required]],
            lastname:['',[Validators.required]],
            accountnumber:['',[Validators.required,Validators.minLength(12)]],
            conformaccountnumber:[''],
            IFSCcode:['',[Validators.required]],
            bankname:['',[Validators.required]],
            branchname:['',[Validators.required]],
            address:['',[Validators.required]]
        });
    

        form.get('conformaccountnumber').setValidators(matchAccountNumberAndConformAccountNumber(form));
        return form;
    }
    



    getForm() : FormGroup {
        return this.form;
    }

}

function matchAccountNumberAndConformAccountNumber(form: FormGroup) : ValidatorFn {
    const accountnumber = form.get('accountnumber');
    const conformaccountnumber = form.get('conformaccountnumber');

    const validator = () => {
        return accountnumber.value == conformaccountnumber.value ? null : {isntMatching: true}
    };

    return validator;
}