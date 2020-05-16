export class TaskUtil {

    private static tasks: any = {};

    public static start(taskName: string) {
        this.tasks[taskName] = new Date();
    }

    public static stop(taskName: string): number {
        const currTime = new Date();
        if (this.tasks[taskName] === undefined) {
            this.tasks[taskName] = currTime;
            return 0;
        } else {
            const startTime = this.tasks[taskName] as Date;
            const duration = currTime.getTime() - startTime.getTime();
            console.log("Task '" + taskName + "' finished in " + (duration / 1000.0) + "s");
            return duration;
        }
    }
}