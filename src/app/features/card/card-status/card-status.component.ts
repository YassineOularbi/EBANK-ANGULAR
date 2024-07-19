import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../core/services/card.service';
import { CardStatusDto } from '../../../core/dtos/card-status.dto';
import { Card } from '../../../core/models/card.model';
import { CardDto } from '../../../core/dtos/card.dto';

@Component({
  selector: 'app-card-status',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './card-status.component.html',
  styleUrls: ['./card-status.component.css']
})
export class CardStatusComponent implements OnInit {
  statusForm: FormGroup;
  id: string | undefined;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.statusForm = this.fb.group({
      isActivated: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id= this.route.snapshot.paramMap.get('id')!;
    this.loadCardStatus();
  }

  loadCardStatus(): void {
    if (this.id) {
      this.cardService.getById(this.id).subscribe({
        next: (card: Card) => {
          this.statusForm.patchValue({
            isActivated: card.isActivated
          });
        },
        error: (err) => {
          console.error('Erreur lors du chargement de la carte:', err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.statusForm.valid && this.id) {
      const statusDto : CardStatusDto = this.statusForm.value as CardStatusDto ;
      this.cardService.changeCardStatus(this.id, statusDto).subscribe({
        next: (response: CardDto) => {
          console.log(response);
          this.router.navigate(['/cards']); 
        },
        error: (err) => {
          console.error('Erreur lors de la mise à jour du statut de la carte:', err);
        }
      });
    }
  }
}
