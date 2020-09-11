FROM python:3.8.5

# Install node 12.8.1
RUN \
  apt-get update && \
  apt-get install -yqq apt-transport-https
RUN \
  echo "deb https://deb.nodesource.com/node_12.x stretch main" > /etc/apt/sources.list.d/nodesource.list && \
  wget -qO- https://deb.nodesource.com/gpgkey/nodesource.gpg.key | apt-key add - && \
  echo "deb https://dl.yarnpkg.com/debian/ stable main" > /etc/apt/sources.list.d/yarn.list && \
  wget -qO- https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && \
  apt-get update && \
  apt-get install -yqq nodejs=$(apt-cache show nodejs|grep Version|grep nodesource|cut -c 10-) yarn && \
  apt-mark hold nodejs && \
  pip install -U pip && pip install pipenv psycopg2 cython mysqlclient && \
  npm i -g npm@^6 && \
  rm -rf /var/lib/apt/lists/*
  
# Setup Ubuntu linux
RUN export LANGUAGE="en_US.UTF-8"

ENV DATABASE_ENGINE django.db.backends.postgresql_psycopg2
ENV DATABASE_NAME johnshub
ENV DATABASE_USER_NAME postgres
ENV DATABASE_PASSWORD postgres
ENV DATABASE_HOST db
ENV DATABASE_PORT 5432
ENV PORT 8000
ENV REACT_APP_API_BASE_URL https://www.johnshub.com/api/v1

RUN mkdir -p /usr/src/johnshub

WORKDIR /usr/src/johnshub
# RUN mkdir -p /usr/src/johnshub/run

COPY requirements.txt /usr/src/johnshub/

RUN pip install -r requirements.txt

COPY . /usr/src/johnshub/
RUN cd /usr/src/johnshub/


RUN mkdir -p /usr/src/johnshub/static
RUN cd /usr/src/johnshub/frontend/ && yarn install && yarn build
# RUN ls -al /usr/src/johnshub/frontend/build/

# RUN cd /usr/src/johnshub/
# # RUN mkdir /usr/src/johnshub/static
# # RUN python manage.py migrate
# RUN python manage.py collectstatic

# RUN ls -al /usr/src/johnshub/static/

# RUN cp -rf /usr/src/johnshub/frontend/build/* /usr/src/johnshub/static/

EXPOSE 8000
