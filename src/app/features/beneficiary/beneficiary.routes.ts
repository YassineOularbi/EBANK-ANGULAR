import { Routes } from '@angular/router';
import { BeneficiaryListComponent } from './beneficiary-list/beneficiary-list.component';
import { BeneficiaryDetailComponent } from './beneficiary-detail/beneficiary-detail.component';
import { BeneficiaryAddComponent } from './beneficiary-add/beneficiary-add.component';
import { BeneficiaryUpdateComponent } from './beneficiary-update/beneficiary-update.component';


export const beneficiaryRoutes: Routes = [
  {
    path: 'beneficiaries/account/:id',
    component: BeneficiaryListComponent
  },
  {
    path: 'beneficiaries/:id',
    component: BeneficiaryDetailComponent
  },
  {
    path: 'beneficiaries/add',
    component: BeneficiaryAddComponent
  },
  {
    path: 'beneficiaries/update/:id',
    component: BeneficiaryUpdateComponent
  }
];
