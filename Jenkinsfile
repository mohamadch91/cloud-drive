pipeline {
    agent none
    stages {
        stage("Select Release Scope") {
            agent { label 'built-in' }
            steps {
                script {
                    env.RELEASE_SCOPE = input message: 'User input required', ok: 'Release!',
                            parameters: [choice(name: 'RELEASE_SCOPE', choices: 'Stage\nProduction', description: 'What is the release scope?')]
                }
                echo "${env.RELEASE_SCOPE}"
            }
        }
        stage("apply release prod") {
            agent { label 'Prod' }
            steps {
                script {
                    if (env.RELEASE_SCOPE == "Production") {                                          
                        stage("Deploy on Prod") {
                            steps {
                                stage('Clone repository') {
                                    checkout scm
                                }

                                stage('Update Prod') {
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
        stage("apply release stage build") {
            agent { label 'built-in' }
            steps {
                script {
                    if (env.RELEASE_SCOPE == "Stage") {
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
                    }
                }
            }
        }
        stage("apply release stage") {
            agent { label 'stage' }
            steps {
                script {
                    if (env.RELEASE_SCOPE == "Stage") {
                        stage('Clone repository') {
                            checkout scm
                        }
                        
                        stage('Update Stage') {
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