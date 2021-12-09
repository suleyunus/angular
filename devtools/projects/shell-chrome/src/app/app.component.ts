import {ChangeDetectorRef, Component, NgZone, OnInit} from '@angular/core';
import {Events, MessageBus, PriorityAwareMessageBus} from 'protocol';

import {injectScripts} from './inject';
import {ZoneAwareChromeMessageBus} from './zone-aware-chrome-message-bus';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    {
      provide: MessageBus,
      useFactory(ngZone: NgZone): MessageBus<Events> {
        const port = chrome.runtime.connect({
          name: '' + chrome.devtools.inspectedWindow.tabId,
        });
        return new PriorityAwareMessageBus(new ZoneAwareChromeMessageBus(port, ngZone));
      },
      deps: [NgZone],
    },
  ],
})
export class AppComponent implements OnInit {
  constructor(private _cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    chrome.devtools.network.onNavigated.addListener(() => {
      window.location.reload();
    });

    injectScripts(['app/backend-es2015.js']);
    this._cd.detectChanges();
  }
}
