FROM python:3.9
ENV PYTHONUNBUFFERED 1
WORKDIR /app/backend
COPY requirements.txt /app/backend/


# Build psycopg2-binary from source -- add required required dependencies
RUN apt-get update -y && apt-get install -y python3-dev graphviz libgraphviz-dev pkg-config && \
        python -m pip install --upgrade pip && \
        pip install -r requirements.txt

COPY . /app/backend/


CMD [ "python3", "manage.py", "runserver", "0.0.0.0:8000" ]