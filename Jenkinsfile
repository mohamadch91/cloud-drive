pipeline {
    agent { label 'built-in' }
    stages {
        stage("Select Release Scope") {
            steps {
                script {
                    env.RELEASE_SCOPE = input message: 'User input required', ok: 'Release!',
                            parameters: [choice(name: 'RELEASE_SCOPE', choices: 'Stage\nProduction', description: 'What is the release scope?')]
                }
                echo "${env.RELEASE_SCOPE}"
                script {
                    if (env.RELEASE_SCOPE == "Production") {                                          
                        stage("Deploy on Prod") {
                            agent { label 'Prod' }
                            steps {
                                stage('Update Prod') {
                                    sh 'docker-compose down'
                                    sh 'docker-compose pull'
                                    sh 'docker-compose up -d'
                                }
                            }
                        }
                    } else {
                        def app
                        stage('Clone repository') {
                            checkout scm
                        }

                        stage('Build image') {
                            app = docker.build("storage/storage-front:${env.BUILD_ID}")
                        }

                        stage('Test image') {
                            app.inside {
                                sh 'echo "Tests passed"'
                            }
                        }

                        stage('Push image') {
                            docker.withRegistry('http://registry.storage-project.ir:5000/storage/') {
                                app.push("${env.BUILD_NUMBER}")
                                app.push("latest")
                            }
                        }
                        
                        stage('Update Stage') {
                            agent { label 'Stage' }
                            sh 'docker-compose down'
                            sh 'docker-compose pull'
                            sh 'docker-compose up -d'
                        }
                    }
                }
            }
        }
    }
}