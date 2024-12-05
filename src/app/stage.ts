export class Stage {
  ref: number;
  titre: string;
  description: string;
  entreprise: string;
  disponible: boolean = true;
  nbrInteresse: number = 0;

  constructor(ref: number, titre: string, description: string, entreprise: string) {
    this.ref = ref;
    this.titre = titre;
    this.description = description;
    this.entreprise = entreprise;
  }
}
