pipeline{
  agent any

  stages{
    stage('Install Frontend dependencies'){
      steps{
        echo 'Installing frontend Dependencies...'
        sh 'npm install'
      }
    }
    stage('start app'){
      steps{
        echo 'Starting the app...'
        sh 'npm start'
      }
    }
  }

}
