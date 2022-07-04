import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./Tab1.css";
import Box from "../components/BoxComponents";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Love</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Love</IonTitle>
          </IonToolbar>
        </IonHeader>
        <Box text="Amor" fontSize="20px" colorText="#ffff" color="#F47C7C" />
        <Box text="Amizade" fontSize="20px" colorText="#ffff" color="#F47C7C" />
        <Box
          text="Admiração"
          fontSize="20px"
          colorText="#ffff"
          color="#F47C7C"
        />
        <Box text="Orgulho" fontSize="20px" colorText="#ffff" color="#F47C7C" />
        <Box
          text="Gratidão"
          fontSize="20px"
          colorText="#ffff"
          color="#F47C7C"
        />
        <Box text="Familia" fontSize="20px" colorText="#ffff" color="#F47C7C" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
