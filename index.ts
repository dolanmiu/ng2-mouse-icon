import { NgModule, ModuleWithProviders } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MouseIconComponent } from "./src/mouse-icon.component";

export * from './src/mouse-icon.component';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        MouseIconComponent
    ],
    exports: [
        MouseIconComponent
    ]
})
export class MouseIconModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: MouseIconModule,
        };
    }
}
