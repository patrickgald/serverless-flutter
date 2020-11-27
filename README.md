# Location Serverless - Campus PUC

O Objetivo deste trabalho é desenvolver uma pequena aplicação usando Serverless com o Google Cloud Functions - GCF e apresentação via aplicação móvel em Flutter.

### ✍️ Requisitos

- [ ] A aplicação móvel deve exibir o mapa da localização atual do telefone.
- [X] A aplicação móvel deve rastrear a localização do usuário.
- [ ] A cada atualização de localização, a aplicação móvel deve invocar a função lambda do GCF.
- [X] A função lambda deve verificar se o aparelho se encontra a menos de 100 metros de alguma unidade da PUC Minas e retornar para o celular a mensagem _"Bem vindo à PUC Minas unidade " + <nome da unidade mais próxima>_.

### 👨🏼‍💻 Como executar
##### 📱 Aplicação
- Habilite a função "Localização" em seu dispositivo móvel para a captura de localização;
- Com o celular conectado ao computador por meio do modo "Depuração", execute o projeto _main.dart_
- Ao instalar e executar a aplicação, a localização atual do seu aparelho será apresentada em tela.

##### ☁️ Cloud Function

👍 🤙 A função não possui restrições de consumo!

- Para enviar uma coordenada geográfica e verificar se a localização está próxima à qualquer unidade PUC Minas, faça uma requisição GET ao endereço:

```
$ https://southamerica-east1-fluted-curve-296915.cloudfunctions.net/ldamd?lat=<LATITUDE>&long=<LONGITUDE>
```
- Os possíveis retornos são:
```
-- 200: PUC Minas <Unidade>
-- 204: Campus not found
```
- Exemplo:

```
$ https://southamerica-east1-fluted-curve-296915.cloudfunctions.net/ldamd?lat=-19.9550665&long=-44.2006218
// Response: PUC Minas Betim
```
### 🛰️ Execução
![Execução](https://media2.giphy.com/media/i2eSgD5kYxAuHy7dvK/giphy.gif)
### 👨‍🎓 Alunos
* Patrick Galdino - [patrickgald](https://github.com/patrickgald)

### 👨‍🏫 Professor responsável

* Hugo Bastos de Paula - [hugodepaula](https://github.com/hugodepaula)


