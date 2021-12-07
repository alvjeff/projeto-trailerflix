var valorCapa = 0 //variavel sera usada assistir

var alberto = document.getElementById("alberto")


var fotoCapa = document.getElementById('capa')


var botao = document.getElementsByClassName('assistir')


function alertar(){
    alert('ola')
}

//por enquanto serão varias funcoes, depois irei refatorar fazer uma funcao centralizda que chama outras funcoes

function trocaFoto1(){
    valorCapa = 1
    fotoCapa.style.backgroundImage = "url('/img/alberto-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Oi Alberto'
    document.getElementById('descricao').innerHTML = 'O monstro marinho que adora diversão, Alberto, quer de todo coração provar seu valor para o seu impassível mentor, Massimo.'
}

function trocaFoto2(){
    valorCapa = 2
    fotoCapa.style.backgroundImage = "url('/img/amina-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Amina'
    document.getElementById('descricao').innerHTML = 'Em Zazzau do século 16, agora Zaria, Nigéria, Amina deve utilizar suas habilidades e táticas militares para defender o reino de sua família. Baseado em uma história verídica.'
}

function trocaFoto3(){
    valorCapa = 3
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/anatomia-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Anatomia de GREY'
    document.getElementById('descricao').innerHTML = 'Os médicos do Grey Sloan Memorial Hospital lidam diariamente com casos e consequências de vida ou morte. É um no outro que eles encontram apoio, conforto, amizade e, às vezes, até mais que amizade... Juntos, eles descobrem o quanto a vida profissional e a pessoal podem ser complicadas e se misturarem no meio do caminho.'
}

function trocaFoto4(){
    valorCapa = 4
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/brain-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Dr Brain'
    document.getElementById('descricao').innerHTML = 'Prepare-se para uma jornada alucinante ao lado de um neurocientista genial que navega pelas memórias das outras pessoas em busca da verdade.'
}

function trocaFoto5(){
    valorCapa = 5
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/exercito-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Exército de ladões: invasão da Europa'
    document.getElementById('descricao').innerHTML = 'Nesta história que antecede Army of the Dead, uma mulher misteriosa convida o caixa de banco Dieter para roubar cofres superprotegidos na Europa.'
}

function trocaFoto6(){
    valorCapa = 6
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/joe-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'G.I. Joe Origens: Snake Eyes'
    document.getElementById('descricao').innerHTML = 'Após salvar a vida do herdeiro de Arashikage, Storm Shadow, Snake Eyes é aceito nesse antigo clã japonês se junta à batalha contra o grupo terrorista Cobra. Desafiando os limites, Snake Eyes será o melhor dos guerreiros ninjas. Porém, são revelados segredos do passado, testando sua honra e lealdade - mesmo que isso signifique perder tudo pelo que lutou.'
}

function trocaFoto7(){
    valorCapa = 7
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/jungle-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Jungle Cruise'
    document.getElementById('descricao').innerHTML = 'O destemido capitão Frank Wolff e a intrépida pesquisadora Lily Houghton se aventuram pela Amazônia a bordo da peculiar embarcação La Quila. Determinados a encontrar uma árvore cujos poderes de cura podem mudar o futuro da medicina, nem mesmo as águas perigosas e as forças sobrenaturais que enfrentam pelo caminho poderão detê-los. Mas os riscos aumentam ainda mais conforme os segredos da árvore se revelam, o destino de Lily e Frank e também de toda a humanidade está em jogo.'
}

function trocaFoto8(){
    valorCapa = 8
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/prisioneiros-capa.jpg')"
    document.getElementById('titulo').innerHTML = '7 Prisioneiros'
    document.getElementById('descricao').innerHTML = 'O jovem Mateus sai do interior em busca de uma oportunidade de trabalho em um ferro velho de São Paulo comandado por Luca. Chegando lá, acaba se tornando vítima de um sistema de trabalho análogo à escravidão. Mas, como Mateus aprende com o tempo, até seu patrão tem um patrão. Se ele quiser encontrar uma saída, até onde ele deverá ir o que deverá se tornar?'
}

function trocaFoto9(){
    valorCapa = 9
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/shangchi-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Shang-Chi e a Lenda dos Dez Anéis'
    document.getElementById('descricao').innerHTML = 'Shang-Chi precisa confrontar o passado que pensou ter deixado para trás. Ao mesmo tempo, ele é envolvido em uma teia de mistérios da organização conhecida como Dez Anéis.'
}

function trocaFoto10(){
    valorCapa = 10
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/simpsons-capa.jpg')"
    document.getElementById('titulo').innerHTML = 'Simpsons em Plusniversário'
    document.getElementById('descricao').innerHTML = 'Os Simpsons organizaram uma festa para o Dia do Disney+ e todos foram convidados… menos o Homer. Com amigos do serviço de streaming e músicas dignas de princesas da Disney, o Plusaniversário é o evento do ano em Springfield.'
}


function trocaFoto0(){
    valorCapa = 0
    fotoCapa.style.backgroundImage = "linear-gradient(rgba(0,0,0,.50),rgba(0,0,0,.50)100%), url('/img/capa-house4.jpg')"
    document.getElementById('titulo').innerHTML = 'House of Cards'
    document.getElementById('descricao').innerHTML = 'Um político inescrupuloso não mede esforços para conquistar o poder nos EUA neste drama vencedor do Emmy e do Globo de Ouro.'
}



//continuar esta funcao depois, preciso saber como encaminhar link em js

//funcao para o botao asssitir
function assistir(){
    if(valorCapa == 0){
        location.href = 'https://www.youtube.com/watch?v=mpVD25j-LCo'
    } else if (valorCapa == 1){
        location.href = 'https://www.youtube.com/watch?v=XbQoPGzgIew'
    } else if(valorCapa == 2){
        location.href = 'https://www.youtube.com/watch?v=NiH7YruwXLQ'
    }
    else if(valorCapa == 3){
        location.href = 'https://www.youtube.com/watch?v=2wqzcLyaU8c'
    }


}

//funcao para botao informacoes
function info(){
    location.href = '../info.html'
}

