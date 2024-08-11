import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListsComponent } from './lists/lists.component';
import { MessagesComponent } from './messages/messages.component';
import { OfferListComponent } from './offers/offer-list/offer-list.component';
import { OfferDetailComponent } from './offers/offer-detail/offer-detail.component';
import { authGuard } from './_guards/auth.guard';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {
        path:'',
        runGuardsAndResolvers: 'always',
        canActivate: [authGuard],
        children: [
            {path: 'offers', component: OfferListComponent},
            {path: 'offers/:id', component: OfferDetailComponent},
            {path: 'lists', component: ListsComponent},
            {path: 'messages', component: MessagesComponent},
        ]
    },
    
    {path: '**', component: HomeComponent, pathMatch: 'full'} 
];
