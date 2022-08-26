import { IonButtons, IonCol, IonContent, IonHeader, IonLabel, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import '../css/About.css';

const About: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>About Todo Tipid</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonRow>
          <IonCol>
            <div id="about">
              <IonLabel>It started when I wanted to budget the little money I have. Only equipped with my skills, I took on a journey to create a budgeting app of my own.</IonLabel>
            </div>
          </IonCol>
        </IonRow>
      </IonContent>
    </IonPage>
  );
};

export default About;
