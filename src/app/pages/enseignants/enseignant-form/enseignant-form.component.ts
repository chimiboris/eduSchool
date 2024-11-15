import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Enseignant } from '../enseignant';
import { EnseignantService } from '../enseignant.service';


interface Sexe {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-enseignant-form',
  templateUrl: './enseignant-form.component.html',
  styleUrl: './enseignant-form.component.scss'
})
export class EnseignantFormComponent implements OnInit {

  @Input()
  enseignant: Enseignant | undefined;
  pageTitle = 'Informations sur l\'enseignant(e)';
  isAddForm: boolean|undefined;
  

  public enseignantForm: FormGroup|undefined;
  public errorMsg: string|undefined;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private enseignantService: EnseignantService
  ){
    this.enseignantForm = this.fb.group({

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

      dateNaissance: [
        '', 
      [
        Validators.required,
      ]
    ],

      lieuNaissance: [
        '', 
      [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(50)
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
      ville: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
      nationalite: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      departement: [
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
      picture: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      matiere1: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],
      matiere2: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
      matiere3: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
      matiere4: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
      matiere5: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]
      ],
    });
  }
  
  ngOnInit(): void {
    
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddForm = false;
      this.pageTitle = 'Éditer l\'enseignant(e)';
      this.enseignantService.getEnseignantById(+id).subscribe({
        next: (enseignant) => {
          if (enseignant) {
            this.enseignant = enseignant;
            this.enseignantForm!.patchValue(enseignant);
          }
        },
        error: (err) => this.errorMsg = err
      });
    }
    
    
    this.enseignantForm?.patchValue({
      nom: this.enseignant?.nom,
      prenom: this.enseignant?.prenom,
      email: this.enseignant?.adresseEmail,
      dateNaissance: this.enseignant?.dateNaissance,
      lieuNaissance: this.enseignant?.lieuNaissance,
      telephone: this.enseignant?.telephone,
      adresse: this.enseignant?.adresse,
      sexe: this.enseignant?.sexe,
      ville: this.enseignant?.ville,
      nationalite: this.enseignant?.nationalite,
      departement: this.enseignant?.departement,
      profession: this.enseignant?.profession,
      matiere1: this.enseignant?.matiere1,
      matiere2: this.enseignant?.matiere2,
      matiere3: this.enseignant?.matiere3,
      matiere4: this.enseignant?.matiere4,
      matiere5: this.enseignant?.matiere5,
      picture: this.enseignant?.picture,
    });

  }

  sexeControl = new FormControl<Sexe | null>(null, Validators.required);
  sexeFormControl = new FormControl('', Validators.required);

  sexes: Sexe[] = [
    {value: 'Masculin', viewValue: 'Masculin'},
    {value: 'Féminin', viewValue: 'Féminin'},
  ];

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
    this.router.navigate(['/dashboard/enseignants']);
  }

  onSubmit(): void {
    const enseignantData = this.enseignantForm!.value as Enseignant;
    if (this.isAddForm) {
      this.enseignantService.addEnseignant(enseignantData)
        .subscribe({
          next: (enseignant: Enseignant) => this.router.navigate(['/dashboard/enseignants', enseignant.id]),
          error: (err) => this.errorMsg = err
        });
    } else {
      if (this.enseignant) {
        enseignantData.id = this.enseignant.id; // Assurez-vous de conserver l'ID pour les mises à jour
        this.enseignantService.updateEnseignant(enseignantData)
          .subscribe({
            next: () => this.router.navigate(['/dashboard/enseignantdetailall', enseignantData.id]),
            error: (err) => this.errorMsg = err
          });
      }
    }
  }

}
