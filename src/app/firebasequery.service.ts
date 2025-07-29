import { Injectable } from '@angular/core';
import { Firestore, collection, deleteDoc, setDoc, doc, getDoc, query, where, getDocs, onSnapshot, orderBy } from '@angular/fire/firestore';
@Injectable({
  providedIn: 'root'
})
export class FirebasequeryService {

  constructor(public firestore:Firestore) { }
  
  async getInformacionInvitado(id:string){
    const docRef = doc(this.firestore, "Invitados", id);
    const docSnap = await getDoc(docRef);

    //console.log(docSnap.data())
    if (docSnap.exists()) {
      return docSnap.data();
      
    } else {
      // docSnap.data() will be undefined in this case
      return false
    }
  }
}
