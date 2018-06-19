import {Router} from "aurelia-router";
import {AireWizard} from "./wizard";

export class WizardController {


    private readonly stack : WizardContext[];

    constructor() {
        this.stack = [];
    }

    push(router: Router, wizard: AireWizard) : void {
        this.stack.push({router: router, wizard: wizard});
    }

    activate(router: Router, wizard: AireWizard) : boolean {
        let c = this.seek(router);
        if(!c) {
            this.push(router, wizard);
            return true;
        }
        return false;
    }

    pop() : AireWizard {
        if(this.stack.length === 0) {
            return null;
        }
        return this.stack.pop().wizard;
    }


    seek(router: Router) : AireWizard {
        let matching = this.stack.find(t => t.router === router);
        return matching && matching.wizard;
    }

    current() : AireWizard {
        let c = this.stack[this.stack.length - 1];
        return c && c.wizard;
    }

    currentModel() : any {
        return this.current().model;
    }

}

interface WizardContext {
    router: Router;
    wizard: AireWizard;
}