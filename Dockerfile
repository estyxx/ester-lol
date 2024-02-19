# Use the official Python 3.12 slim image as the base image
FROM python:3.12-slim

# Set environment variables to ensure Python runs in unbuffered mode and doesn't generate .pyc files
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1
ENV PDM_PYTHON=/usr/local/bin/python

# Install system dependencies required for PDM and your application
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# Install PDM at a specific version
RUN pip install pdm==2.12.3

# Set the working directory within the container
WORKDIR /app

# Copy the PDM project files (pyproject.toml and pdm.lock) to the container
COPY pdm.lock pyproject.toml /app/

# Install the production dependencies using PDM
# Ensure that gunicorn is installed by including the production group
RUN pdm install --prod --group production

# Copy the application code to the container
COPY . /app


# The command to run the application using Gunicorn with 4 worker processes
CMD ["pdm", "run", "gunicorn", "esterlol.wsgi:application", "--bind", "0.0.0.0:8000"]
