import { animate, query, style, transition, trigger } from '@angular/animations';

export const RouteFade = [
  transition('* => *', [
    query(
      ':enter',
      [
        style({
          opacity: 0,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }),
      ],
      { optional: true },
    ),
    query(
      ':leave',
      [
        style({
          opacity: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }),
        animate('0.2s', style({ opacity: 0 })),
      ],
      { optional: true },
    ),
    query(
      ':enter',
      [
        style({
          opacity: 0,
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
        }),
        animate('0.2s', style({ opacity: 1 })),
      ],
      { optional: true },
    ),
  ]),
];
