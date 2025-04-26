FROM node:23.11.0-bullseye-slim
LABEL version="1.0"
LABEL description="react_with_figma_mcp development container"
# Update and install necessary packages
RUN apt-get update -y \
    && apt-get install -y --no-install-recommends \
        git \
        openssh-client \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Enable Corepack and set Yarn to version 4
RUN corepack enable \
&& corepack prepare yarn@stable --activate 
