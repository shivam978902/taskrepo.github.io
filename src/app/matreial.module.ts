import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule,MatToolbarModule,MatDividerModule,MatSidenavModule,MatIconModule,MatListModule,MatStepperModule,MatMenuModule,MatFormFieldModule,MatInputModule} from '@angular/material';
@NgModule({
    declarations: [
     
    ],
    imports: [
      BrowserModule,
      BrowserAnimationsModule,
      MatButtonModule,
      MatToolbarModule,
      MatSidenavModule,
      MatIconModule,
      MatListModule,
      MatStepperModule,
      MatFormFieldModule,
      MatInputModule,
      MatMenuModule,
      MatDividerModule
    ],
    exports:[
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatStepperModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatDividerModule
    ],
    providers: [],
    bootstrap: []
  })

  export class MaterialModule { }

