import { test, expect } from '../support/index.js' // Importando o modulo o index
import data from '../support/fixtures/endereco.json' assert { type: 'json' } // Importanto arquivo JSON: Projeto usando ES Modules
import { faker } from '@faker-js/faker'

test('Cadastrar de endereço', async ({ page }) => {

    // Logando a aplicação
    const userEmail = faker.internet.email(); // Email Aleatório
    const endereco = data.dados // Criando CONSTANTE para receber os dados

    await page.login.acessarLogin()

    await page.login.preencherCampos(userEmail, '123654')
    await page.login.clicarBotaoLogin()

    await page.minhaConta.validarSucesso('Login realizado', `Olá, ${userEmail}`)
    await page.minhaConta.clicarEmOk()

    // Acessando tela de cadastro de Enderaço
    await page.minhaConta.acessarCadastroEndereco()

    // Cadastro
    await page.endereco.cadastrarEndereco(endereco.primeiro_nome, endereco.sobrenome, endereco.nome_da_empresa, endereco.email, endereco.pais, endereco.estado_cidade, endereco.cep, endereco.endereco_completo, endereco.notas_adicionais)
    await page.endereco.validarSucesso()
    await page.waitForTimeout(5000)


})