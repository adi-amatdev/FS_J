
import {useRecoilValue, RecoilRoot} from 'recoil';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationsSelector } from './store/atoms/atoms'

function App() {
  return (
    <>
    <RecoilRoot>
     <LinkdenTopBar/>
    </RecoilRoot>
      
    </>
  )
}

function LinkdenTopBar(){
  const notificationsCount = useRecoilValue(notificationsAtom);
  const networkCount = useRecoilValue(networkAtom);
  const jobCount = useRecoilValue(jobsAtom);
  const messageCount = useRecoilValue(messagingAtom);
  const totalNotificationCount = useRecoilValue(totalNotificationsSelector);
  return <>
    <button>Home </button>
      <button>My network({networkCount > 100 ? '99+':networkCount})</button>
      <button>Jobs({jobCount })</button>
      <button>Messaging({messageCount})</button>
      <button>Notifications({notificationsCount})</button>
      <button>me({totalNotificationCount})</button>
  </>
}

export default App
