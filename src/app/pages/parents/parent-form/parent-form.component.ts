import { Component, Input } from '@angular/core';
import { Parent } from '../parent';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParentService } from '../parent.service';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';


interface Sexe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-parent-form',
  templateUrl: './parent-form.component.html',
  styleUrl: './parent-form.component.scss'
})
export class ParentFormComponent {

  @Input()
  parent: Parent | undefined;
  pageTitle = 'Informations sur le parent';
  isAddForm: boolean|undefined;

  public parentForm: FormGroup|undefined;
  public errorMsg: string|undefined;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private parentService: ParentService
  ){
    this.parentForm = this.fb.group({

      nom: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      prenom: [
          '', 
          [
            // Validators.required, 
            // Validators.minLength(3),
            // Validators.maxLength(50)
          ]
        ],

      adresseEmail: [
          , 
          [
            Validators.required, 
            // Validators.email
          ]
        ],      
      telephone: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],

      adresse: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      nationalite: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      sexe: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      profession: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
      picture: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
    });
  }
  
  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddForm = false;
      this.pageTitle = 'Éditer le parent';
      this.parentService.getParentById(+id).subscribe({
        next: (parent) => {
          if (parent) {
            this.parent = parent;
            this.parentForm!.patchValue(parent);
          }
        },
        error: (err) => this.errorMsg = err
      });
    }
    
    
    this.parentForm?.patchValue({
      nom: this.parent?.nom,
      prenom: this.parent?.prenom,
      email: this.parent?.adresseEmail,
      telephone: this.parent?.telephone,
      adresse: this.parent?.adresse,
      nationalite: this.parent?.nationalite,
      sexe: this.parent?.sexe,
      profession: this.parent?.profession,
      picture: this.parent?.picture,
    });

  }

  sexeControl = new FormControl<Sexe | null>(null, Validators.required);
  sexeFormControl = new FormControl('', Validators.required);

  sexes: Sexe[] = [
    {value: 'Masculin', viewValue: 'Masculin'},
    {value: 'Féminin', viewValue: 'Féminin'},
  ];

  selectedValue: string | undefined;
  selectedCar: string | undefined;

  hide = true;
  email1 = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = '';

  updateErrorMessage() {
    if (this.email1.hasError('Émail requis')) {
      this.errorMessage = 'Vous devez entrer une valeur';
    } else if (this.email1.hasError('email')) {
      this.errorMessage = 'Email non valid';
    } else {
      this.errorMessage = '';
    }
  }

  dateClass: MatCalendarCellClassFunction<Date> = (cellDate, view) => {
    // Only highligh dates inside the month view.
    if (view === 'month') {
      const date = cellDate.getDate();

      // Highlight the 1st and 20th day of each month.
      return date === 1 || date === 20 ? 'example-custom-date-class' : '';
    }

    return '';
  };

  cancel(){
    this.router.navigate(['/dashboard/parents']);
  }

  onSubmit(): void {
    const parentData = this.parentForm!.value as Parent;
    if (this.isAddForm) {
      this.parentService.addParent(parentData)
        .subscribe({
          next: (parent: Parent) => this.router.navigate(['/dashboard/parents', parent.id]),
          error: (err) => this.errorMsg = err
        });
    } else {
      if (this.parent) {
        parentData.id = this.parent.id; // Assurez-vous de conserver l'ID pour les mises à jour
        this.parentService.updateParent(parentData)
          .subscribe({
            next: () => this.router.navigate(['/dashboard/parentdetailall', parentData.id]),
            error: (err) => this.errorMsg = err
          });
      }
    }
  }

}
