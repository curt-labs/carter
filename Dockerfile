FROM golang:1.4

RUN mkdir -p /home/deployer/gosrc/src/github.com/ninnemana/carter
ADD . /home/deployer/gosrc/src/github.com/ninnemana/carter
WORKDIR /home/deployer/gosrc/src/github.com/ninnemana/carter
RUN export GOPATH=/home/deployer/gosrc && go get
RUN export GOPATH=/home/deployer/gosrc && go build -o carter ./init.go

ENTRYPOINT /home/deployer/gosrc/src/github.com/ninnemana/carter/carter

EXPOSE 8080