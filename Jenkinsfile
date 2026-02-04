
pipeline {
  // Use a containerized Node.js environment for consistent builds
  agent {
    docker {
      image 'node:20-bullseye'     // Stable Node 20 with build tools
      args  '-u root:root'         // Avoid permission issues with npm cache on some agents
      reuseNode true               // Keeps workspace between stages for speed
    }
  }

  // Automatically check Git for changes on a schedule (Poll SCM)
  triggers {
    // Jenkins cron syntax: MINUTE HOUR DOM MONTH DOW
    // H/5 * * * * = Poll approximately every 5 minutes with hash-spread (H) per job
    pollSCM('H/5 * * * *')
  }

  options {
    timestamps()                   // Prefix console logs with timestamps
   // ansiColor('xterm')             // Colored output for readability
    buildDiscarder(logRotator(numToKeepStr: '30')) // Keep last 30 builds
  }

  environment {
    CI = 'true'                    // Standard CI flag for tools
    NEXT_TELEMETRY_DISABLED = '1'  // Disable Next.js telemetry in CI
    // If you ever hit memory issues on large builds, uncomment:
    // NODE_OPTIONS = '--max-old-space-size=3072'
  }

  stages {

    stage('Checkout') {
      steps {
        // Pull source code from the same SCM configured in the job
        checkout scm
        // Print versions for debugging
        sh 'node -v && npm -v'
      }
    }

    stage('Install dependencies') {
      steps {
        // Use npm ci when lockfile is present for reproducible builds; fall back to npm install otherwise
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

    stage('Lint (if script exists)') {
      steps {
        // Only run lint if package.json has a "lint" script
        sh '''
          set -e
          if node -e "process.exit(!(require('./package.json').scripts||{}).lint ? 0 : 1)"; then
            echo "Running: npm run lint"
            npm run lint
          else
            echo "No lint script found; skipping."
          fi
        '''
      }
    }

    stage('Test (if script exists)') {
      steps {
        // Only run tests if package.json has a "test" script
        sh '''
          set -e
          if node -e "process.exit(!(require('./package.json').scripts||{}).test ? 0 : 1)"; then
            echo "Running: npm test --if-present"
            npm test --if-present
          else
            echo "No test script found; skipping."
          fi
        '''
      }
    }

    stage('Build (Next.js production)') {
      steps {
        // Build your Next.js app (generates .next)
        sh '''
          set -euxo pipefail
          npm run build
        '''
      }
    }

    stage('Archive build artifacts') {
      steps {
        // Store build outputs so you can download/inspect them from Jenkins
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
      // Show workspace size for debugging storage issues (non-blocking)
      sh 'du -sh . || true'
    }
  }
}
