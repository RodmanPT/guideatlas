#!/usr/bin/env sh
set -eu

LOG_FILE="/workspace/agents/discovery-agent/agent.log"
mkdir -p "$(dirname "$LOG_FILE")"

{
  echo "===== GuideAtlas Agent Run: $(date -Iseconds) ====="
  python /opt/guideatlas-agent/discovery_agent.py
  EXIT_CODE=$?
  echo "===== Finished with exit code: ${EXIT_CODE} ====="
  exit "${EXIT_CODE}"
} 2>&1 | tee -a "$LOG_FILE"
