import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import ExploreContainer from "../components/ExploreContainer";
import Images from "../components/UpImgs";
import "./Tab2.css";

const Tab2: React.FC = () => {
  return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonTitle>Momentos</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Momentos</IonTitle>
            </IonToolbar>
          </IonHeader>
          <Images></Images>
        </IonContent>
      </IonPage>
  );
};

export default Tab2;
