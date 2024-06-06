import {initFederation, loadRemoteModule} from '@softarc/native-federation';

(async () => {

    await initFederation();
    // loadRemoteModule({
    //     remoteName: "mfe",
    //     exposedModule: "./component",
    // })
    await import('./button/MyButton');

})();