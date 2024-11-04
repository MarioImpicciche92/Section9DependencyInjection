import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { TaskService } from './app/services/Task.service';

bootstrapApplication(AppComponent).catch((err) => console.error(err));
