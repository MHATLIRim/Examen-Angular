import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Stage } from './stage';  // Assurez-vous que ce modèle existe

@Injectable({
  providedIn: 'root'
})
export class StageService {

  private stages: Stage[] = [
    { ref: 1, titre: 'Stage 1', description: 'Description 1', entreprise: 'Entreprise 1', disponible: true, nbrInteresse: 5 },
    { ref: 2, titre: 'Stage 2', description: 'Description 2', entreprise: 'Entreprise 2', disponible: false, nbrInteresse: 3 }
  ];  // Exemple de données locales

  constructor() { }

  // Méthode pour obtenir les stages
  
  getStages(): Observable<Stage[]> {
    return of(this.stages);
  }

  // Méthode pour supprimer un stage
  deleteStage(ref: number): Observable<void> {
    const index = this.stages.findIndex(stage => stage.ref === ref);
    if (index > -1) {
      this.stages.splice(index, 1);
    }
    return of();
  }

  // Méthode pour mettre à jour le nombre d'intérêts
  updateStage(stage: Stage): Observable<Stage> {
    const index = this.stages.findIndex(s => s.ref === stage.ref);
    if (index > -1) {
      this.stages[index] = stage;
    }
    return of(stage);
  }
}
