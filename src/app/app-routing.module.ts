import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsAreaComponent } from './components/tools-area/tools-area.component';
import { ParseToolComponent } from './components/parse-tool/parse-tool.component';

const routes: Routes = [
    { path: 'ToolArea', component: ToolsAreaComponent, data: { title: 'Nodes' } },
    { path: 'ParseTool', component: ParseToolComponent, data: { title: 'Parse New Node' } },
    { path: '**', redirectTo: 'ToolArea', pathMatch: 'full' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}
