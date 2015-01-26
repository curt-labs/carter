FROM golang:1.4

RUN mkdir -p /home/deployer/gosrc/src/github.com/ninnemana/carter/public
WORKDIR /home/deployer/gosrc/src/github.com/ninnemana/carter

ADD ./init.go /home/deployer/gosrc/src/github.com/ninnemana/carter/init.go
ADD ./package.json /home/deployer/gosrc/src/github.com/ninnemana/carter/package.json
ADD ./app.yaml /home/deployer/gosrc/src/github.com/ninnemana/carter/app.yaml
ADD ./manifest.yaml /home/deployer/gosrc/src/github.com/ninnemana/carter/manifest.yaml
ADD ./public /home/deployer/gosrc/src/github.com/ninnemana/carter/public

RUN export GOPATH=/home/deployer/gosrc && go get
RUN export GOPATH=/home/deployer/gosrc && go build -o carter ./init.go

ENTRYPOINT /home/deployer/gosrc/src/github.com/ninnemana/carter/carter

EXPOSE 8080