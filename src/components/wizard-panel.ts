import {WizardController} from "./controller";
import {AireWizard} from "./wizard";
import {
    customElement,
    bindable,
    autoinject,
    bindingMode
} from "aurelia-framework";
import {createEvent} from "../../core/dom";

@autoinject
@customElement('wizard-panel')
export class WizardPanel {

    @bindable
    private header : string;

    @bindable
    private helptext : string;


    @bindable
    nextActive : boolean;


    @bindable({
        defaultBindingMode: bindingMode.twoWay
    })
    public panel : HTMLElement;
    @bindable({
        defaultBindingMode: bindingMode.twoWay
    })
    private model : any;

    @bindable
    private wizard : AireWizard;

    constructor(private element : Element,
                private controller : WizardController) {
        if (element.hasAttribute('animate')) {
            element.classList.add('au-animate');
        }
    }


    attached() : void {
        this.wizard = this.controller.current();
        this.model = this.controller.currentModel();
    }

    next() : void {
        if (this.nextActive) {
            this.wizard.next();
        }
    }

    finish() : void {
        let event = createEvent('finished', null);
        this.element.dispatchEvent(event);
        this.wizard.finish();
    }

}