import { Component } from '@angular/core';
import { DialogService } from './dialog/dialog.service';
import { ExampleComponent } from './example/example.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'project-with-popUp';

  constructor(public dialogService: DialogService) {
    const ref = dialogService.open(ExampleComponent, {
      data: { message: 'Dynamic component inside of a dialog' }
    });

    ref.afterClosed.subscribe(result => {
      console.log('Dialog closed', result)
    })
  }
}
