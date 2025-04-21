pipeline{
  agent any

  stages{
    stage('Install Frontend dependencies'){
      steps{
        echo 'Installing frontend Dependencies...'
        sh 'npm install'
      }
    }
    stage{
      steps{
        echo 'Starting the app...'
        sh 'npm start src/index.js'
      }
    }
  }

}
