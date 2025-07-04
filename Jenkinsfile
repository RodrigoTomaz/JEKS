pipeline {
    agent any

    tools {
        nodejs 'NodeJS_24' // Certifique-se de configurar isso no Jenkins
    }

    stages {
        stage('Instalar dependências') {
            steps {
                bat 'npm install'
            }
        }

        stage('Build') {
            steps {
                bat 'npm run build'
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