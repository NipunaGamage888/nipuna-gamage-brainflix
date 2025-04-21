pipeline{
  agent any

  stages{
    stage('Install Frontend dependencies') {
    steps {
        echo 'Installing frontend Dependencies...'
        sh 'node -v && npm -v'
        sh 'npm cache clean --force'
        sh 'rm -rf node_modules package-lock.json'
        timeout(time: 5, unit: 'MINUTES') {
            sh 'npm install --legacy-peer-deps --verbose'
        }
    }
}
    stage('start app'){
      steps{
        echo 'Starting the app...'
        sh 'npm run build'
      }
    }
  }

}
