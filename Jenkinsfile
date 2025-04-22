pipeline {
    agent any

    stages {
        stage('Install Frontend dependencies') {
            steps {
                echo 'Installing frontend Dependencies...'
                sh '''
                    rm -rf node_modules package-lock.json
                    npm cache clean --force
                    npm install
                    npm install sass --save-dev
                '''
            }
        }

        stage('Build React App') {
            steps {
                echo 'Starting the app...'
                sh 'npm run build'
            }
        }
    }
}
