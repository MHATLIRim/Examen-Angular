import { Component, OnInit } from '@angular/core';
import { StageService } from '../stage.service';  // Assurez-vous que le service Stage est importé
import { Stage } from '../stage';  // Assurez-vous que le modèle Stage est bien défini

@Component({
  selector: 'app-stages',
  templateUrl: './stages.component.html',
  styleUrls: ['./stages.component.css']
})
export class StagesComponent implements OnInit {
  stages: Stage[] = [];  // Tableau des stages récupérés du service

  constructor(private stageService: StageService) { }

  searchKeyword: string = '';

  get filteredStages(): Stage[] {
    return this.stages.filter(stage =>
      stage.description.toLowerCase().includes(this.searchKeyword.toLowerCase())
    );
  }

  ngOnInit(): void {
    this.loadStages();
  }

  // Charger les stages
  loadStages(): void {
    this.stageService.getStages().subscribe((data: Stage[]) => {
      this.stages = data;
    });
  }

  // Méthode pour incrémenter nbrInteresse
  onInterested(stage: Stage): void {
    stage.nbrInteresse++;

    
    // Si vous souhaitez sauvegarder la modification, vous pouvez envoyer la mise à jour au service
    // this.stageService.updateStage(stage).subscribe();
  }


  // Méthode pour supprimer un stage
  onDelete(stage: Stage): void {
    const index = this.stages.indexOf(stage);
    if (index > -1) {
      this.stages.splice(index, 1);  // Supprimer le stage du tableau
      
      // Si vous avez un service pour supprimer le stage, vous pouvez appeler une méthode comme:
      // this.stageService.deleteStage(stage.ref).subscribe();
    }
  }
}
