import {atom, selector} from 'recoil';

export const networkAtom = atom({
    key:"networkAtom",
    default: 120

});

export const notificationsAtom = atom({
    key:"notificationsAtom",
    default: 12

});
export const messagingAtom = atom({
    key:"messagingAtom",
    default: 90

});
export const jobsAtom = atom({
    key:"jobsAtom",
    default: 10

});

export const totalNotificationsSelector = selector({
    key : 'totalNotificationsSelector',
    get: ({get}) =>{
        const networkAtomCount = get(networkAtom);
        const notificationsAtomCount = get(notificationsAtom);
        const messagingAtomCount  = get(messagingAtom);
        const jobsAtomCount = get(jobsAtom);

        return networkAtomCount + notificationsAtomCount + messagingAtomCount + jobsAtomCount;

    }
})