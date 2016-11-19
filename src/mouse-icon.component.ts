import { Component } from '@angular/core';
import { STYLES } from './templates';

@Component({
    selector: 'app-mouse-icon',
    template: `
        <div class="mouse-icon">
            <div class="wheel"></div>
        </div>
    `,
    styles: [STYLES]
})
export class MouseIconComponent {
}
