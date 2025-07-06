pipeline{
    agent any

    tools{
        nodejs 'NodeJS_24'
    }

    environment{
        PATH = "${tool 'NodeJS_24'}/bin:${env.PATH}"
    }

    stages{
        stage('Instalar Dependências'){
            steps{
                bat 'npm install'
            }
        }

        stage('Build Angular'){
            steps{
                bat 'npx ng build --configuration production'
            }
        }

        stage('Deploy para Vercel'){
            steps{
                withCredentials([string(credentialsId: 'vercel_token', variable: 'VERCEL_TOKEN')]){
                    bat 'npm install -g vercel'
                    bat 'vercel deploy --prod --yes --token=%VERCEL_TOKEN% --cwd=dist/project-curso'
                }
            }
        }
    }
    post{
        success{
            echo'Deploy feito com sucesso!'
        }
        failure{
            echo'Erro ao fazer o Deploy, verifique o log!'
        }
    }
}