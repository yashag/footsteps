import {Steps} from "../../types/steps/steps";
import Stack from "../stack";

class StepsManager {
    public stepsStack: Stack<Steps> = new Stack<Steps>();

    constructor(initialStep?: Steps) {
        if (initialStep !== undefined) {
            this.nextStep(initialStep);
        }
    }

    public getCurrentStep(): Steps {
        return this.stepsStack.peek()!;
    }

    public nextStep(step: Steps): void {
        this.stepsStack.push(step);
    }

    public previousStep(): void {
        if (this.stepsStack.size() <= 1) {
            throw new Error("A step must always be presented. StepsManager can't have no steps at all!");
        }
        this.stepsStack.pop();
    }
}

export default StepsManager;
