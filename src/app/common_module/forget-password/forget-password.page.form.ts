import { FormBuilder,  FormGroup, Validators } from "@angular/forms";

export class ForgetpasswordPageForm{
    private formBulider: FormBuilder;

    constructor(formBulider : FormBuilder){
        this.formBulider = formBulider;
    }
    createForm() : FormGroup{
        return this.formBulider.group({
            email:['' ,[Validators.required, Validators.email] ]
        });
    }
}