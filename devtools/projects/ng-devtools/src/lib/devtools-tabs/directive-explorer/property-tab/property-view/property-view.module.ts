import {DragDropModule} from '@angular/cdk/drag-drop';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';

import {PropertyEditorComponent} from './property-editor.component';
import {PropertyPreviewComponent} from './property-preview.component';
import {PropertyTabBodyComponent} from './property-tab-body.component';
import {PropertyViewBodyComponent} from './property-view-body.component';
import {PropertyViewHeaderComponent} from './property-view-header.component';
import {PropertyViewTreeComponent} from './property-view-tree.component';
import {PropertyViewComponent} from './property-view.component';

@NgModule({
  declarations: [
    PropertyViewComponent,
    PropertyViewTreeComponent,
    PropertyViewHeaderComponent,
    PropertyViewBodyComponent,
    PropertyTabBodyComponent,
    PropertyPreviewComponent,
    PropertyEditorComponent,
  ],
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatTreeModule,
    MatTooltipModule,
    CommonModule,
    MatExpansionModule,
    DragDropModule,
    FormsModule,
  ],
  exports: [
    PropertyViewComponent,
    PropertyViewTreeComponent,
    PropertyViewHeaderComponent,
    PropertyViewBodyComponent,
    PropertyTabBodyComponent,
    PropertyPreviewComponent,
    PropertyEditorComponent,
  ],
})
export class PropertyViewModule {
}
