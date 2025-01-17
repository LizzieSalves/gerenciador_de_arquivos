import path, { resolve } from 'path'
import fs, { writeFile } from 'fs'
import { promises } from 'dns'


// Criar diretorio:
export function createdDirectory(dirPath){
    return new Promise((resolve, reject) => {
        fs.mkdir(dirPath, {resursive: true}, (err) => {
            if (err){
                reject(err)
            } 

            else{
                resolve(`Diretorio ${dirPath} criado com sucesso!`)
            }
        })
    }) 

}


// Criar arquivo no diretorio:
export function creatdFile(filePath, content = ''){
    return new Promese ((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if (err){
                reject(err)
            }
            else{
                resolve(`Arquivo ${filePath} criado com sucesso!`)
            }
        })
    })

}


// Listar arquivos:
export function listFiles(dirPath){
    return new Promese ((resolve, reject) => {
        // readdir = fazer a leitura do diretorio
        fs.readdir(dirPath, (err, files) => {
            if (err){
                reject(err)
            }
            else{
                resolve(files)
            }
        })
    })
}


// Ler arquivos:
export function readFile(filePath){
    return new Promise ((resolve, reject) => {
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}


// Escrever arquivos:
export function writeFile(filePath, content){
    return new Promese ((resolve, reject) => {
        fs.writeFile(filePath, content, 'utf-8', (err) => {
            if (err){
                reject(err)
            }
            else {
                resolve(`Arquivo editado com sucesso!`)
            }
        })
    })
}


// Excluir arquivos:
export function deletFile(filePath) {
    return new Prome ((resolve, reject) => {
        fs.deletFile(filePath)
    })
}

