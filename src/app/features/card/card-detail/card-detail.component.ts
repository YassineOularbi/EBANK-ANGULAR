import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardService } from '../../../core/services/card.service'; // Adjust path as needed
import { TransactionDto } from '../../../core/dtos/transaction.dto'; // Adjust path as needed
import { Card } from '../../../core/models/card.model';

@Component({
  selector: 'app-card-detail',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  card: Card | undefined;
  cardId: string | undefined;

  constructor(
    private cardService: CardService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.cardId = this.route.snapshot.paramMap.get('id')!;
    this.loadCardDetails();
  }

  loadCardDetails(): void {
    if (this.cardId) {
      this.cardService.getById(this.cardId).subscribe({
        next: (card: Card) => {
          this.card = card;
        },
        error: (err) => {
          console.error('Error loading card details:', err);
        }
      });
    }
  }
}
