import { Routes } from '@angular/router';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { BeneficiaryDetailComponent } from './beneficiary-detail/beneficiary-detail.component';
import { BeneficiaryAddComponent } from './beneficiary-add/beneficiary-add.component';
import { BeneficiaryUpdateComponent } from './beneficiary-update/beneficiary-update.component';
import { authGuard } from '../../core/guards/auth.guard';


export const beneficiaryRoutes: Routes = [
  {
    path: 'beneficiaries/account/:id',
    component: BeneficiaryListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiaries/:id',
    component: BeneficiaryDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiaries/add',
    component: BeneficiaryAddComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiaries/update/:id',
    component: BeneficiaryUpdateComponent,
    canActivate: [authGuard]
  }
];
