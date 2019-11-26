import { Component, Input } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: "select-value",
  templateUrl: `./select-value.component.html`,
  styleUrls: ["./select-value.component.css"]
})
export class SelectValueComponent {
  name = new FormControl("");

  countryForm: FormGroup;

  countries = [
    {
      id: "8f8c6e98",
      name: "USA",
      code: "USD"
    },
    {
      id: "169fee1a",
      name: "Canada",
      code: "CAD"
    },
    {
      id: "3953154c",
      name: "UK",
      code: "GBP"
    }
  ];

  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.countryForm = this.fb.group({
      countryControl: [this.countries[1]]
    });
  }

  addNewOption(name: string, code: string) {
    setTimeout(() => {
      this.countries = [
        {
          id: "8f8c6e98",
          name: "USA",
          code: "USD"
        },
        {
          id: "169fee1a",
          name: "Canada",
          code: "CAD"
        },
        {
          id: "3953154c",
          name: "UK",
          code: "GBP"
        },
        {
          id: "68c61e29",
          name,
          code
        }
      ];
      this.countryForm.controls["countryControl"].patchValue({
        id: "68c61e29",
        name,
        code
      });
    }, 500);
  }

  compareFn(c1: any, c2: any): boolean {
    return c1 && c2 ? c1.id === c2.id : c1 === c2;
  }
}
