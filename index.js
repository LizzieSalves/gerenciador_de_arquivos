import * as fileManager from "./fileManager.js";
import readlineSync from "readline-sync";
import path from "path";
import { fileURLToPath } from "url";

// Configurar o__dirName e o __fileName

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


async function main(){

  const baseDir = path.join(__dirname,'Meus_arquivos')
  
  await fileManager.createdDirectory(baseDir)
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

    const choice = readlineSync.question('Digite um numero:')
    // Switch = escolha caso
    try{
        switch (choice) {
            case "1":
                const fileName = readlineSync.question("Qual e o nome do arquivo? Digite o nome e extensao do arquivo")
                const fileContent =  readlineSync.question("Qual e o conteudo da arquivo?")

                const creatdFilePath = path.join(baseDir, fileName)
                const fileMessage = await fileManager.createdFile(creatdFilePath, fileContent)
                console.log(fileMessage)
              break;

            case "2":
                const files= await fileManager.listFiles(baseDir)
                console.log('Arquivos no diretorio', files);
              break;

            case "3":
                const readFileName = readlineSync.question("Digite o nome e extensao do arquivo:")
                const readFilePath = path.join(baseDir, readFileName)
                const content = await fileManager.readFiles(readFilePath)
                console.log("Conteudo do arquivo", content);
                
              break;
            case "4":
                const writeFileName = readlineSync.question("Digite o no")
              break;
            case "5":
              break;
            case "6":
              break;
              return;
      
            default:
              console.log("Opcao invalida. Tende novamente!");
          }
    } catch (err){
        console.log("Erro:", err.messager)
    }
  }
}

main()

