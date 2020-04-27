import { HeatTileGeneratorWebWorker } from 'igniteui-react-core';

let worker: Worker = self as any;
worker.onmessage = HeatTileGeneratorWebWorker.onmessage;

HeatTileGeneratorWebWorker.postmessage = postMessageFunction;
HeatTileGeneratorWebWorker.start();

function postMessageFunction(){
    self.postMessage.apply(self, Array.prototype.slice.call(arguments));
}

export default {} as typeof Worker & (new () => Worker);
