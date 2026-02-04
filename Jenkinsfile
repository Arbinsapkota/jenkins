// Jenkinsfile — Next.js CI-only using Docker agent on Windows
// - Runs inside Docker image: node:20-bullseye
// - Poll SCM every 5 minutes
// - npm ci/install -> optional lint/test -> build -> archive
// - Windows-safe post section

pipeline {
  agent {
    docker {
      image 'node:20-bullseye'
      args  '-u root:root'     // avoids npm cache permission issues
      reuseNode true
    }
  }

  options {
    timestamps()
    // ansiColor('xterm')
    buildDiscarder(logRotator(numToKeepStr: '30'))
  }

  triggers {
    // Poll approximately every 5 minutes
    pollSCM('H/5 * * * *')
  }

  environment {
    CI = 'true'
    NEXT_TELEMETRY_DISABLED = '1'
    // NODE_OPTIONS = '--max-old-space-size=3072' // uncomment if you hit memory issues
  }

  stages {
    stage('Checkout') {
      steps {
        checkout scm
        // Inside container, it's Linux, so sh is fine here
        sh 'node -v && npm -v'
      }
    }

    stage('Install dependencies') {
      steps {
        sh '''
          set -euxo pipefail
          if [ -f package-lock.json ]; then
            npm ci
          else
            npm install
          fi
        '''
      }
    }

    stage('Lint (if exists)') {
      steps {
        sh '''
          set -e
          if node -e "process.exit(!(require('./package.json').scripts||{}).lint ? 0 : 1)"; then
            echo "Running: npm run lint"
            npm run lint
          else
            echo "No lint script; skipping."
          fi
        '''
      }
    }

    stage('Test (if exists)') {
      steps {
        sh '''
          set -e
          if node -e "process.exit(!(require('./package.json').scripts||{}).test ? 0 : 1)"; then
            echo "Running: npm test --if-present"
            npm test --if-present
          else
            echo "No test script; skipping."
          fi
        '''
      }
    }

    stage('Build (Next.js production)') {
      steps {
        sh '''
          set -euxo pipefail
          npm run build
        '''
      }
    }

    stage('Archive build artifacts') {
      steps {
        archiveArtifacts artifacts: '.next/**', fingerprint: true, onlyIfSuccessful: true
      }
    }
  }

  post {
    success {
      echo '✅ CI build completed successfully. Artifacts archived from .next/.'
    }
    failure {
      echo '❌ CI build failed. Check the stage logs above.'
    }
    always {
      // Guard for Windows controller: run a safe command inside container only if we still have a workspace
      script {
        // Only run this if we are still inside a node/workspace context
        echo 'Build workspace size (non-blocking):'
        // Since our stages ran inside the docker agent (Linux), use sh here
        // but guard in case the node context is lost
        try {
          sh 'du -sh . || true'
        } catch (ignored) {
          echo 'Skipping size check (no workspace context).'
        }
      }
    }
  }
}