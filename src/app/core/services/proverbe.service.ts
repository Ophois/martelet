import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProverbeService {

  private proverbes: string[] = [
    "Tout vient à point à qui sait attendre (Lafontaine)",
		"Rien ne sert de courir il faut partir à point (Lafontaine)",
		"Si vous ne réalisez pas vos rêves, quelqu'un vous embauchera pour réaliser les siens (S. Jobs)",
		"Dans la vie il y a 10 sortes de gens, ceux qui savent compter en binaire et les autres (A. Einstein)",
		"Il n'y a que les montagnes qui ne se rencontrent jamais",
		"Les voyages forment la jeunesse",
		"Ne buvez pas au volant, vous pourriez en renverser (Coluche)",
		"La franchise ne consiste pas à dire ce que l'on pense, mais à penser ce que l'on dit (Coluche)",
		"Angular, c'est le bonheur total! (B. T.)",
		"Après une heure de gym je me sens mieux. Les autres aussi me sentent mieux (O. Wilde)",
		"L'expérience, c'est le nom que chacun donne à ses erreurs (O. Wilde)",
		"L'intelligence c'est comme un parachute, quand on n'en as pas on s'écrase (P. Desproges)"
  ];

  public afficher(): string {
    let val = Math.floor(Math.random() * this.proverbes.length);
    return this.proverbes[val];
  }
}
