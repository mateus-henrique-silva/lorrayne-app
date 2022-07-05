import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import Msg from "../components/boxMsg";
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
        
        <Box paragraph="É essa vontade incontrolável de passar todos os dias ao seu lado. Fazer de tudo para te tirar um sorriso bobo. O amor é simples e sincero. Te amo vida!" text="Amor" fontSize="20px" colorText="#ffff" color="#F47C7C" />
       
        <Box paragraph="É essa parceria que temos desde o dia que nos conhcemos. Saber que posso contar com você nos momentos mais dificeis" text="Amizade" fontSize="20px" colorText="#ffff" color="#F47C7C" />
        <Box paragraph="É a honra de estar ao lado de uma mulher guerreira, determinada, sonhadora. Que me motiva a crecer e amadurecer todos os dias para ser o melhor para você "
          text="Admiração"
          fontSize="20px"
          colorText="#ffff"
          color="#F47C7C"
        />
        <Box paragraph="É o que eu sinto das conquistas. É do seu futuro que será brilhante. Acredito em você e nos seus sonhos" text="Orgulho" fontSize="20px" colorText="#ffff" color="#F47C7C" />
        <Box paragraph="É o que eu tenho todos os dias. Agradeço a Deus por ter colocado a mulher mais incrivel do mundo na minha vida."
          text="Gratidão"
          fontSize="20px"
          colorText="#ffff"
          color="#F47C7C"
        />
        <Box paragraph="É o que somos. Mesmo não vivendo juntos ainda eu sei que somos uma familia, pois familia é que esta ao nosso lado nos bons e mals momento, e como eu sempre disse somos nos 2 contra o mundo!!"text="Familia" fontSize="20px" colorText="#ffff" color="#F47C7C" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
