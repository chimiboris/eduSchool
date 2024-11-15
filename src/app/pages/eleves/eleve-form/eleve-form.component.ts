import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatCalendarCellClassFunction } from '@angular/material/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { Eleve } from '../eleve';
import { EleveService } from '../eleve.service';
import { ErrorStateMatcher } from '@angular/material/core';

interface Section {
  value: string;
  viewValue: string;
}
interface TypeEnseignement {
  value: string;
  viewValue: string;
}
interface NatureEnseignement {
  value: string;
  viewValue: string;
}
interface Cycle {
  value: string;
  viewValue: string;
}
interface Sexe {
  value: string;
  viewValue: string;
}


/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-eleve-form',
  templateUrl: './eleve-form.component.html',
  styleUrl: './eleve-form.component.scss',
})
export class EleveFormComponent implements OnInit {

  @Input()
  eleve: Eleve | undefined;
  pageTitle = 'Informations sur l\'élève';
  isAddForm: boolean|undefined;

  email1 = new FormControl('', [Validators.required, Validators.email]);
  public eleveForm: FormGroup|undefined;
  public errorMsg: string|undefined;

  constructor(
    private router: Router, private route: ActivatedRoute,
    private fb: FormBuilder, private eleveService: EleveService
  ){
    this.eleveForm = this.fb.group({

      matricule: [
        '', 
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50)
        ]
      ],

      nom: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],
      prenom: [
        '', 
        [
          // Validators.required, 
          // Validators.minLength(3),
          // Validators.maxLength(50)
        ]],
      sexe: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      email: [
          , 
          [
            Validators.required, 
            // Validators.email
          ]],

      dateNaissance: [
        '', 
      [
        Validators.required,
      ]],

      lieuNaissance: [
        '', 
      [
        Validators.required, 
        Validators.minLength(3),
        Validators.maxLength(50)
      ]],

      niveau: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      classe: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      specialite: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      section: [
        null, 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      typeEnseignement: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      natureEnseignement: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      cycle: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      telephone: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      adresse: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      ville: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      nationalite: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      nomDuPere: [
        '', 
        [
          Validators.required, 
          Validators.minLength(3),
          Validators.maxLength(50)
        ]],

      nomDeLaMere: [
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
    });

  }
  
  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isAddForm = false;
      this.pageTitle = 'Éditer l\'élève';
      this.eleveService.getEleveById(+id).subscribe({
        next: (eleve) => {
          if (eleve) {
            this.eleve = eleve;
            this.eleveForm!.patchValue(eleve);
          }
        },
        error: (err) => this.errorMsg = err
      });
    }
    
    
    this.eleveForm?.patchValue({
      matricule: this.eleve?.matricule,
      nom: this.eleve?.nom,
      prenom: this.eleve?.prenom,
      email: this.eleve?.email,
      dateNaissance: this.eleve?.dateNaissance,
      lieuNaissance: this.eleve?.lieuNaissance,
      niveau: this.eleve?.niveau,
      classe: this.eleve?.classe,
      specialite: this.eleve?.specialite,
      section: this.eleve?.section,
      sexe: this.eleve?.sexe,
      typeEnseignement: this.eleve?.typeEnseignement,
      natureEnseignement: this.eleve?.natureEnseignement,
      cycle: this.eleve?.cycle,
      telephone: this.eleve?.telephone,
      adresse: this.eleve?.adresse,
      ville: this.eleve?.ville,
      nationalite: this.eleve?.nationalite,
      nomDuPere: this.eleve?.nomDuPere,
      nomDeLaMere: this.eleve?.nomDeLaMere,
      picture: this.eleve?.picture
    });

  }

  sectionControl = new FormControl<Section | null>(null, Validators.required);
  sectionFormControl = new FormControl('', Validators.required);

  sexeControl = new FormControl<Sexe | null>(null, Validators.required);
  sexeFormControl = new FormControl('', Validators.required);

  typeEnseignementControl = new FormControl<TypeEnseignement | null>(null, Validators.required);
  typeEnseignementFormControl = new FormControl('', Validators.required);

  natureEnseignementControl = new FormControl<NatureEnseignement | null>(null, Validators.required);
  natureEnseignementFormControl = new FormControl('', Validators.required);

  cycleControl = new FormControl<Cycle | null>(null, Validators.required);
  cycleFormControl = new FormControl('', Validators.required);


  
  sections: Section[] = [
    {value: 'Anglophone', viewValue: 'Anglophone'},
    {value: 'Francophone', viewValue: 'Francophone'},
  ];
  sexes: Sexe[] = [
    {value: 'Masculin', viewValue: 'Masculin'},
    {value: 'Féminin', viewValue: 'Féminin'},
  ];
  typeEnseignements: TypeEnseignement[] = [
    {value: 'Général', viewValue: 'Général'},
    {value: 'Technique', viewValue: 'Technique'},
  ];
  natureEnseignements: NatureEnseignement[] = [
    {value: 'Général', viewValue: 'Général'},
    {value: 'Commercial', viewValue: 'Commercial'},
    {value: 'Industriel', viewValue: 'Industriel'},
  ];
  cycles: Cycle[] = [
    {value: 'Premier cycle', viewValue: 'Premier cycle'},
    {value: 'Second cycle', viewValue: 'Second cycle'},
  ];

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
    this.router.navigate(['/dashboard/eleves']);
  }

  onSubmit(): void {
    const eleveData = this.eleveForm!.value as Eleve;
    if (this.isAddForm) {
      this.eleveService.addEleve(eleveData)
        .subscribe({
          next: (eleve: Eleve) => this.router.navigate(['/dashboard/eleves', eleve.id]),
          error: (err) => this.errorMsg = err
        });
    } else {
      if (this.eleve) {
        eleveData.id = this.eleve.id; // Assurez-vous de conserver l'ID pour les mises à jour
        this.eleveService.updateEleve(eleveData)
          .subscribe({
            next: () => this.router.navigate(['/dashboard/elevedetailall', eleveData.id]),
            error: (err) => this.errorMsg = err
          });
      }
    }
  }

  
}
