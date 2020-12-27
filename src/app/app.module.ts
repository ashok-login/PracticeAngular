import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomDirectiveComponent } from './custom-directive/custom-directive.component';
import { ColorDirective } from './color.directive';
import { CheckNumDirective } from './check-num.directive';
import { HighlightMeDirective } from './highlight-me.directive';
import { DbCommunicationComponent } from './db-communication/db-communication.component';
import { TestSmallProgramComponent } from './test-small-program/test-small-program.component';
import { AsyncPipeDemoComponent } from './async-pipe-demo/async-pipe-demo.component';
import { Revision1Component } from './revision1/revision1.component';
import { ArrowFunctionsComponent } from './arrow-functions/arrow-functions.component';
import { TemplateReferenceVariableComponent } from './template-reference-variable/template-reference-variable.component';
import { CourseComponent } from './course/course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { PropertyBindingExample01Component } from './property-binding-example01/property-binding-example01.component';
import { ClassBindingExampleComponent } from './class-binding-example/class-binding-example.component';
import { DataBindingExample01Component } from './data-binding-example01/data-binding-example01.component';
import { StyleBiningExampleComponent } from './style-bining-example/style-bining-example.component';
import { TemplateReferenceVariableExampleComponent } from './template-reference-variable-example/template-reference-variable-example.component';
import { NgIfElseExampleComponent } from './ng-if-else-example/ng-if-else-example.component';
import { NgSwitchDirectiveExampleComponent } from './ng-switch-directive-example/ng-switch-directive-example.component';
import { NgForDirectiveExampleComponent } from './ng-for-directive-example/ng-for-directive-example.component';
import { ChildComponent } from './child/child.component';
import { MyparentComponent } from './myparent/myparent.component';
import { MychildComponent } from './myparent/mychild/mychild.component';
import { BuiltinPipesComponent } from './builtin-pipes/builtin-pipes.component';
import { StaticEmpListComponent } from './static-emp-list/static-emp-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectiveComponent,
    ColorDirective,
    CheckNumDirective,
    HighlightMeDirective,
    DbCommunicationComponent,
    TestSmallProgramComponent,
    AsyncPipeDemoComponent,
    Revision1Component,
    ArrowFunctionsComponent,
    TemplateReferenceVariableComponent,
    CourseComponent,
    CourseDetailComponent,
    PropertyBindingExample01Component,
    ClassBindingExampleComponent,
    DataBindingExample01Component,
    StyleBiningExampleComponent,
    TemplateReferenceVariableExampleComponent,
    NgIfElseExampleComponent,
    NgSwitchDirectiveExampleComponent,
    NgForDirectiveExampleComponent,
    ChildComponent,
    MyparentComponent,
    MychildComponent,
    BuiltinPipesComponent,
    StaticEmpListComponent,
    routingComponents,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
