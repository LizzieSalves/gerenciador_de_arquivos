import * as fileManager from "./fileManager";
import readlineSync from "readline-sync";
import path from "path";
import { fileURLToPath } from "url";

function main() {
  // loopin -> while =
  while (true) {
    console.log("\nMenu:");
    console.log("1 - Criar arquivo:");
    console.log("2 - Listar arquivos:");
    console.log("3 - Ler arquivos:");
    console.log("4 - Escrever arquivos:");
    console.log("5 - Deletar:");
    console.log("6 - Sair!");

    //? o que é o readlinesync?
    
    const choice = readlineSync.question('Digite um número:')
    // Switch = escolha caso
    switch (choice) {
      case 1:
        break;
      case 2:
        break;
      case 3:
        break;
      case 4:
        break;
      case 5:
        break;
      case 6:
        break;
        return;

      default:
        console.log("Opção inválida. Tende novamente!");
    }
  }
}
