import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CardService } from '../../../core/services/card.service'; // Adjust path as needed
import { CardBlockingDto } from '../../../core/dtos/card-blocking.dto';
import { CardDto } from '../../../core/dtos/card.dto';

@Component({
  selector: 'app-card-block',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './card-block.component.html',
  styleUrls: ['./card-block.component.css']
})
export class CardBlockComponent implements OnInit {
  blockForm: FormGroup;
  id: string | undefined;

  constructor(
    private fb: FormBuilder,
    private cardService: CardService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.blockForm = this.fb.group({
      blockingReason: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id')!;
  }

  onSubmit(): void {
    if (this.blockForm.valid && this.id) {
      const blockingDto = new CardBlockingDto(this.blockForm.value.blockingReason);
      this.cardService.blockCard(this.id, blockingDto).subscribe({
        next: (response: CardDto) => {
          console.log(response);
          this.router.navigate(['/cards']);
        },
        error: (err) => {
          console.error('Erreur lors du blocage de la carte:', err);
        }
      });
    }
  }
}
