import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CardService } from '../../../core/services/card.service'; // Adjust path as needed
import { CardDto } from '../../../core/dtos/card.dto';
import { CardType } from '../../../core/enums/card-type.enum';
import { CardTier } from '../../../core/enums/card-tier.enum';
import { NetworkType } from '../../../core/enums/network-type.enum';

@Component({
  selector: 'app-card-add',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './card-add.component.html',
  styleUrls: ['./card-add.component.css']
})
export class CardAddComponent implements OnInit {
  cardForm: FormGroup;
  cardTypes = [CardType[0], CardType[1]];
  cardTiers = [CardTier[0], CardTier[1], CardTier[2]];
  networkTypes = [NetworkType[0], NetworkType[1]];

  constructor(
    private fb: FormBuilder,
    private cardService: CardService
  ) {
    this.cardForm = this.fb.group({
      type: ['', Validators.required],
      tier: ['', Validators.required],
      network: ['', Validators.required],
      account_id: ['', Validators.required]
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.cardForm.valid) {
      const cardDto : CardDto = this.cardForm.value as CardDto;
      this.cardService.save(cardDto).subscribe({
        next: (response: CardDto) => {
          console.log('Card added successfully:', response);
        },
        error: (err) => {
          console.error('Error adding card:', err);
        }
      });
    }
  }
}
