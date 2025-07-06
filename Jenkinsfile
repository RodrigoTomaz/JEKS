pipeline{
    agent any

    tools{
        nodejs 'NodeJS_24'
    }

    stage{
        stages('Build'){
            steps{
                bat 'ng install'
            }
        }
    }
}