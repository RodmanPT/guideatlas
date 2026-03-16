FROM python:3.11-slim

WORKDIR /opt/guideatlas-agent

RUN apt-get update \
    && apt-get install -y --no-install-recommends git ca-certificates \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt /opt/guideatlas-agent/requirements.txt
RUN pip install --no-cache-dir -r /opt/guideatlas-agent/requirements.txt

COPY discovery_agent.py /opt/guideatlas-agent/discovery_agent.py
COPY run.sh /opt/guideatlas-agent/run.sh
COPY cities.json /opt/guideatlas-agent/cities.json

RUN chmod +x /opt/guideatlas-agent/run.sh

CMD ["/opt/guideatlas-agent/run.sh"]
