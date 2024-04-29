FROM python:3.12-slim

# Install system dependencies required for PDM and your application
RUN apt-get update && \
    apt-get install -y --no-install-recommends gcc libpq-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*


# install PDM
RUN pip install -U pdm
# disable update check
ENV PDM_CHECK_UPDATE=false

# copy files
COPY esterlol/ /app/esterlol
COPY pyproject.toml pdm.lock manage.py README.md /app/

# install dependencies and app into the local packages directory
WORKDIR /app
RUN pdm install --check --prod --no-editable --group production

ENV PATH="/app/.venv/bin:$PATH"

CMD ["gunicorn", "esterlol.wsgi:application", "--bind", "0.0.0.0:8000"]
