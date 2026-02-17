import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'signals',
    pathMatch: 'full'
  },
  {
    path: 'signals',
    loadComponent: () =>
      import('./features/signals-demo/signals-demo.component')
        .then(m => m.SignalsComponent)
  },
  {
    path: 'directives',
    loadComponent: () =>
      import('./features/directives-demo/directive.component')
        .then(m => m.DirectivesComponent)
  },
  {
    path: 'pipes',
    loadComponent: () =>
      import('./features/pipes-demo/pipes.component')
        .then(m => m.PipesComponent)
  },
  {
    path: 'routing',
    loadComponent: () =>
      import('./features/routing-demo/routing.component')
        .then(m => m.RoutingComponent),
    children: [
      {
        path: 'child-a',
        loadComponent: () =>
          import('./features/routing-demo/child-a.component')
            .then(m => m.ChildAComponent)
      },
      {
        path: 'child-b',
        loadComponent: () =>
          import('./features/routing-demo/child-b.component')
            .then(m => m.ChildBComponent)
      }
    ]
  },
  // {
  //   path: 'guard',
  //   loadComponent: () =>
  //     import('./features/guard-demo/guard.component')
  //       .then(m => m.GuardComponent),
  //   canActivate: [
  //     () => import('./core/guards/auth.guard')
  //       .then(g => g.authGuard)
  //   ]
  // },
  // {
  //   path: 'http',
  //   loadComponent: () =>
  //     import('./features/http-demo/http.component')
  //       .then(m => m.HttpComponent)
  // },
  {
    path: '**',
    redirectTo: 'signals'
  }
];
