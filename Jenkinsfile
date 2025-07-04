pipeline{
    agent any

    tools {
        nodejs 'NodeJS_18'
    }

    stages{
        stage('Build'){
            step{
                echo'Fazendo o build'
                sh 'node -v'
            }
        }
        stage('Teste'){
            step{
                echo'Fazendo o Teste'
            }
        }
        stage('Deploy'){
            step{
                echo'Fazendo o deploy'
            }
        }
    }

    post{
        sucess{
            echo'sucesso'
        }

    }
}