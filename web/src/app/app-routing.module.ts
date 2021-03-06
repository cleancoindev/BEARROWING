import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {BaseComponent} from './base/base.component';
import {NoContentComponent} from './no-content/no-content.component';

const routes = [
    {
        path: '',
        component: BaseComponent,
        children: [
            {
                path: '',
                loadChildren: './borrowing/borrowing.module#BorrowingModule'
            },
        ]
    },
    {
        path: '**',
        component: NoContentComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            routes,
            {
                enableTracing: false,
                useHash: true
            }
        )
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
