import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Calender from "../components/CalendarioJS"

import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
<IonPage>
  <IonHeader>
    <IonToolbar>
      <IonTitle>Calendario</IonTitle>
    </IonToolbar>
  </IonHeader>
  <IonContent>
  <Calender/>
  </IonContent>
</IonPage>
  );
};

export default Tab2;
