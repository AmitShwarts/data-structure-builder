import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app-component/app.component';
import { MainZoneComponent } from './components/main-zone/main-zone.component';
import { MenuComponent } from './components/menu/menu.component';
import { ToolsAreaComponent } from './components/tools-area/tools-area.component';
import { ParseToolComponent } from './components/parse-tool/parse-tool.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatButtonModule } from '@angular/material/button';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';

@NgModule({
    declarations: [
        AppComponent,
        MainZoneComponent,
        MenuComponent,
        ToolsAreaComponent,
        ParseToolComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        DragDropModule,
        MatButtonModule,
        NoopAnimationsModule,
        MatMenuModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
