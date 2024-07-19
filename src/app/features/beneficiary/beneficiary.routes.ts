import { Routes } from '@angular/router';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { BeneficiaryDetailComponent } from './beneficiary-detail/beneficiary-detail.component';
import { BeneficiaryAddEditComponent } from './beneficiary-add-edit/beneficiary-add-edit.component';
import { authGuard } from '../../core/guards/auth.guard';


export const beneficiaryRoutes: Routes = [
  {
    path: 'beneficiaries',
    component: BeneficiaryListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiaries/:id',
    component: BeneficiaryDetailComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiary/add',
    component: BeneficiaryAddEditComponent,
    canActivate: [authGuard]
  },
  {
    path: 'beneficiaries/update/:id',
    component: BeneficiaryAddEditComponent,
    canActivate: [authGuard]
  }
];
