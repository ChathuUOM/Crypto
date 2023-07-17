import { Component, OnInit } from '@angular/core';

interface record {
  img: string;
  header: string;
  owner: string;
  description: string;
}

@Component({
  selector: 'coin-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  records: record[] = [];

  constructor() {
    this.records = [
      {
        img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ECNDF6YYQRN4XEIA5YWA45Q53Y.jpg',
        header: 'Bitcoin Weekly Outlook',
        owner: 'By Bitcoins.com - just now',
        description:
          'Bitcoin fell more than 0.5% on Monday after a rebound in US Treasury yields, and the US doller index manipulated trader short term appetite for the crtptocurrency. [...]',
      },
      {
        img: 'https://www.newsbtc.com/wp-content/uploads/2021/03/kava-crypto.jpg',
        header: 'Crypto Weekly Roundup',
        owner: 'By Bitcoins.com - 50 min ago',
        description:
          'Bitcoin price reached all time high levels this Saturday. As you can imagine this has been another hectic week for the cryptospace[...]',
      },
      {
        img: 'https://s32659.pcdn.co/wp-content/uploads/2022/09/Crypto-News-Roundup.jpg.optimal.jpg',
        header: 'Defi Gem KAVA Is Now Available through Crypto.com',
        owner: 'By Bitcoins.com - 1h ago',
        description:
          'Crypto.com has listed KAVA as a supported currency on to its platform.',
      },
      {
        img: 'https://cloudfront-us-east-2.images.arcpublishing.com/reuters/ECNDF6YYQRN4XEIA5YWA45Q53Y.jpg',
        header: 'Bitcoin Weekly Outlook',
        owner: 'By Bitcoins.com - 2h ago',
        description:
          'Bitcoin fell more than 0.5% on Monday after a rebound in US Treasury yields, and the US doller index manipulated trader short term appetite for the crtptocurrency. [...]',
      },
      {
        img: 'https://www.newsbtc.com/wp-content/uploads/2021/03/kava-crypto.jpg',
        header: 'Crypto Weekly Roundup',
        owner: 'By Bitcoins.com - 4h ago',
        description:
          'Bitcoin price reached all time high levels this Saturday. As you can imagine this has been another hectic week for the cryptospace[...]',
      },
      {
        img: 'https://s32659.pcdn.co/wp-content/uploads/2022/09/Crypto-News-Roundup.jpg.optimal.jpg',
        header: 'Defi Gem KAVA Is Now Available through Crypto.com',
        owner: 'By Bitcoins.com - 1d ago',
        description:
          'Crypto.com has listed KAVA as a supported currency on to its platform.',
      },
    ];
  }

  ngOnInit(): void {
    const currentURL = window.location.href;
    if (currentURL.indexOf('news') !== -1) {
      document.body.classList.add('news-wrapper');
    }
  }
}
