import signup from '../pages/SignupPage'
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage';

describe('Signup', () => {

  // beforeEach(function(){
  //   cy.fixture('deliver').then((d)=>{
  //     this.deliver = d
  //   })
  // })

  it('User should be deliver', function() {
    const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'

    var deliver = signupFactory.deliver()

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.modalContentShouldBe(expectedMessage)
    cy.screenshot()
  })

  it('Incorrect document', function() {

    var deliver = signupFactory.deliver()

    deliver.cpf = '000000141aa'
    
    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! CPF inválido')
    cy.screenshot()
  });

  it('Incorrect email', function() {

    var deliver = signupFactory.deliver()

    deliver.email = 'leao.com.br'

    signup.go()
    signup.fillForm(deliver)
    signup.submit()
    signup.alertMessageShouldBe('Oops! Email com formato inválido.')
    cy.screenshot()
  });

  context('Required fields', function(){
  
    const messages = [
      { field: 'name', output: 'É necessário informar o nome' },
      { field: 'cpf', output: 'É necessário informar o CPF' },
      { field: 'email', output: 'É necessário informar o email' },
      { field: 'postalcode', output: 'É necessário informar o CEP' },
      { field: 'number', output: 'É necessário informar o número do endereço' },
      { field: 'delivery_method', output: 'Selecione o método de entrega' },
      { field: 'cnh', output: 'Adicione uma foto da sua CNH' },
    ]

    before(function(){
      signup.go()
      signup.submit()
    })

    messages.forEach(function(msg){
      it(`${msg.field} is required`, function(){
        signup.alertMessageShouldBe(msg.output)
      })
    })
  })

});