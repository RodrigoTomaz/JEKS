pipeline{
    agent any

    tools {
        nodejs 'NodeJS_24'
    }

    stages {
        stage('Instalar dependências') {
            steps {
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
    }

     post {
        success {
            echo 'Build concluído com sucesso!'
        }
        failure {
            echo 'Erro durante o build!'
        }
    }
}