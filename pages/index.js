function Home() {
    return (
        <>
            <h1>Desafio do dia</h1>
            <p>O índice de massa corporal (IMC) é uma medida internacional usada para calcular se uma pessoa está no peso ideal.</p>
            <p>Ele foi desenvolvido pelo polímata Lambert Quételet no fim do século XIX. Trata-se de um método fácil e rápido para a avaliação do nível de gordura de cada pessoa, ou seja, é um preditor internacional de obesidade adotado pela Organização Mundial da Saúde (OMS).</p>
            <p>O IMC é determinado pela divisão da massa do indivíduo pelo quadrado de sua altura, em que a massa está em quilogramas e a altura em metros. A fórmula é a seguinte:</p>
            <p> IMC = PESO / (ALTURA * ALTURA) </p>
            <p>A classificação é feita de acordo com as seguintes regras:</p>
            <p> a- For menor que 16 - Magreza grave </p>
            <p> b- de 16 a menor que 17 - Magreza moderada</p>
            <p> c- de 17 a menor que 18,5 - Magreza leve</p>
            <p> d- de 18,5 a menor que 25 - Saudável</p>
            <p> e- de 25 a menor que 30 - Sobrepeso</p>
            <p> f- de 30 a menor que 35 - Obesidade Grau I</p>
            <p> g- de 35 a menor que 40 - Obesidade Grau II (severa)</p>
            <p> h- maior ou igual a 40 - Obesidade Grau III (mórbida)</p>
            <p> Escreva um programa Python que leia o peso e a altura de uma pessoa e retorna seu IMC classificado de acordo com a tabela acima.</p>
            <p> Sua saída deverá ser parecida com:</p>
            <p>Informe seu peso: 82</p>
            <p>Informe sua altura: 1.85</p>
            <p>Seu IMC é: 23.959094229364496</p>
            <p>Sua classificação é Saudável</p>
        </>
    );
}

export default Home;
