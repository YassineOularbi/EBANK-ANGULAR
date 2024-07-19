import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CardService } from '../../../core/services/card.service';
import { Card } from '../../../core/models/card.model';
import { RouterLink } from '@angular/router';
import { CardDto } from '../../../core/dtos/card.dto';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css']
})
export class CardListComponent implements OnInit {
  cards: Card[] = [];

  constructor(private cardService: CardService) {}

  ngOnInit(): void {
    this.loadCards();
  }

  loadCards(): void {
    this.cardService.getAllByAccount('9').subscribe({
      next: (response: Card[]) => {
        this.cards = response;
      },
      error: (err) => {
        console.error('Error loading cards:', err);
      }
    });
  }

  deleteCard(id: any): void {
    this.cardService.delete(id).subscribe({
      next: (response: CardDto) => {
        console.log(response)
        window.location.reload();
      },
      error: (err) => {
        console.error(`Error deleting card ${id}:`, err);
      }
    });
  }
}
