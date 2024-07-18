// import { Routes } from '@angular/router';
// import { LoginComponent } from './features/auth/login/login.component';
// import { SignupComponent } from './features/auth/signup/signup.component';
// import { LogoutComponent } from './features/auth/logout/logout.component';
// import { UserListComponent } from './features/user/user-list/user-list.component';
// import { UserUpdateComponent } from './features/user/user-update/user-update.component';
// import { UserDetailComponent } from './features/user/user-detail/user-detail.component';
// import { AccountListComponent } from './features/account/account-list/account-list.component';
// import { AccountAddComponent } from './features/account/account-add/account-add.component';
// import { AccountUpdateComponent } from './features/account/account-update/account-update.component';
// import { AccountDetailComponent } from './features/account/account-detail/account-detail.component';
// import { AccountCloseComponent } from './features/account/account-close/account-close.component';
// import { CardListComponent } from './features/card/card-list/card-list.component';
// import { CardAddComponent } from './features/card/card-add/card-add.component';
// import { CardDetailComponent } from './features/card/card-detail/card-detail.component';
// import { CardBlockComponent } from './features/card/card-block/card-block.component';
// import { CardStatusComponent } from './features/card/card-status/card-status.component';
// import { InternalTransactionComponent } from './features/transaction/internal-transaction/internal-transaction.component';
// import { ExternalTransactionComponent } from './features/transaction/external-transaction/external-transaction.component';
// import { CardTransactionComponent } from './features/transaction/card-transaction/card-transaction.component';
// import { TransactionListComponent } from './features/transaction/transaction-list/transaction-list.component';
// import { TransactionDetailComponent } from './features/transaction/transaction-detail/transaction-detail.component';
// import { BeneficiaryListComponent } from './features/beneficiary/beneficiary-list/beneficiary-list.component';
// import { BeneficiaryDetailComponent } from './features/beneficiary/beneficiary-detail/beneficiary-detail.component';
// import { BeneficiaryAddComponent } from './features/beneficiary/beneficiary-add/beneficiary-add.component';
// import { BeneficiaryUpdateComponent } from './features/beneficiary/beneficiary-update/beneficiary-update.component';
// import { authGuard } from './core/guards/auth.guard';


// export const routes: Routes = [
//     {
//         path: 'login',
//         component: LoginComponent,
//       },
//       {
//         path: 'signup',
//         component: SignupComponent,
//       },
//       {
//         path: 'logout',
//         component: LogoutComponent,
//       },
//       {
//         path: 'users',
//         component: UserListComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'users/update/:id',
//         component: UserUpdateComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'users/:id',
//         component: UserDetailComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'accounts',
//         component: AccountListComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'accounts/add',
//         component: AccountAddComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'accounts/update/:id',
//         component: AccountUpdateComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'accounts/:id',
//         component: AccountDetailComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'accounts/:id/close',
//         component: AccountCloseComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'cards',
//         component: CardListComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'cards/add',
//         component: CardAddComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'cards/:id',
//         component: CardDetailComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'cards/:id/block',
//         component: CardBlockComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'cards/:id/activate-deactivate',
//         component: CardStatusComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'transactions/internal/:creditId/:debitId',
//         component: InternalTransactionComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'transactions/external/:accountId/:beneficiaryId',
//         component: ExternalTransactionComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'transactions/card/:cardId/:beneficiaryId',
//         component: CardTransactionComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'transactions/account/:id',
//         component: TransactionListComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'transactions/:id',
//         component: TransactionDetailComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'beneficiaries/account/:id',
//         component: BeneficiaryListComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'beneficiaries/:id',
//         component: BeneficiaryDetailComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'beneficiaries/add',
//         component: BeneficiaryAddComponent,
//         canActivate: [authGuard]
//       },
//       {
//         path: 'beneficiaries/update/:id',
//         component: BeneficiaryUpdateComponent,
//         canActivate: [authGuard]
//       }
// ];