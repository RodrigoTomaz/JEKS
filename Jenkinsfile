pipeline{
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    stages{
        stage('Build'){
            steps{
                echo'Fazendo o build'
                sh 'node -v'
            }
        }
        stage('Teste'){
            steps{
                echo'Fazendo o Teste'
            }
        }
        stage('Deploy'){
            steps{
                echo'Fazendo o deploy'
            }
        }
    }

    post{
        success{
            echo'sucesso'
        }
    }
}