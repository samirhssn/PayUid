import { FormBuilder,  FormGroup, Validators } from "@angular/forms";

export class LoginPageForm{
    private formBulider: FormBuilder;

    constructor(formBulider : FormBuilder){
        this.formBulider = formBulider;
    }
    createForm() : FormGroup{
        return this.formBulider.group({
            email:['' ,[Validators.required, Validators.email] ],
            password:['', [Validators.required]]
        });
    }
}