import {initFederation, loadRemoteModule} from '@softarc/native-federation';
export async function LOADMFE (mfe:string,url:string, moduleName:string){
    const record : Record<string, string> = {}
    record[mfe] = url
    await initFederation(record);
    loadRemoteModule({
        remoteName: mfe,
        exposedModule: moduleName,
    })
    console.log("Loaded")
}

// (async () => {
//
//     await LOADMFE( "mfe1", "http://localhost:3001/remoteEntry.json","./component")
//     // await initFederation({
//     //     "mfe1": "http://localhost:3001/remoteEntry.json"
//     // });
//     // loadRemoteModule({
//     //     remoteName: "mfe1",
//     //     exposedModule: "./component",
//     // })
//     // console.log("Loaded")
// })();


global.LOADMFE = LOADMFE


