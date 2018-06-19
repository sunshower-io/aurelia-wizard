import {
    customElement,
    bindable,
    bindingMode
} from "aurelia-framework";
import {NavModel, Router} from "aurelia-router";
import {autoinject} from "aurelia-dependency-injection";
import {WizardController} from "./controller";
import {WindowListener} from "lib/window/window";
import {EventAggregator} from "aurelia-event-aggregator";

@autoinject
@customElement('aire-wizard')
export class AireWizard implements WindowListener {

    @bindable
    private router: Router;

    @bindable({defaultBindingMode: bindingMode.twoWay})
    public  model: any;

    last        : number;
    current     : number = 0;


    constructor(
        private controller: WizardController,
        private aggregator: EventAggregator) {
    }

    handle(e : Event) : boolean {
        console.log(e);
        return false;
    }


    bind(bindingContext: Object, overrideContext:Object) : any {
        this.controller.push(this.router, this);
        this.current = this.currentStep;
        this.last = this.router.navigation.length - 1;
        window.onbeforeunload = (e) => {
            this.aggregator.publish('wizard::cancelled', e);
            return true;
        }
    }

    get currentStep() : number {
        let r = this.router,
            ci = r.currentInstruction,
            result = r.navigation.findIndex(t => t.config.name === ci.config.name);
        return result;
    }

    detached(): void {
        window.onbeforeunload = null;
    }


    complete() : void {
        this.controller.pop();
        window.onbeforeunload = null;
    }

    navigateTo(model: NavModel): void {
        this.router.navigateToRoute(model.config.name);
    }

    get isFirst(): boolean {
        return parseInt(this.router.currentInstruction.config.settings.order) === 0;
    }

    get isLast(): boolean {
        return parseInt(this.router.currentInstruction.config.settings.order) === this.last;
    }

    next(): void {
        if (!this.isLast) {
            let current = this.router.navigation[++this.current];
            this.router.navigateToRoute(current.config.name);
        }
    }

    previous(): void {
        if (!this.isFirst) {
            let current = this.router.navigation[--this.current];
            this.router.navigateToRoute(current.config.name);
        }
    }

    finish() {

    }
}


