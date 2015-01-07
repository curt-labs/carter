package main

import (
	"github.com/codegangsta/negroni"
	"github.com/go-zoo/bone"
	"github.com/unrolled/render"
	"net/http"
	"os"
)

func main() {
	r := render.New(render.Options{
		Directory:  "build",
		Layout:     "",
		Extensions: []string{".html"},
	})
	mux := bone.New()

	mux.Handle("/_ah/start", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.WriteHeader(200)
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("ok"))
	}))
	mux.Handle("/_ah/health", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		w.WriteHeader(200)
		w.Header().Set("Content-Type", "text/plain")
		w.Write([]byte("ok"))
	}))
	mux.Handle("/_ah/start", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		r.JSON(w, 200, map[string]string{"status": "coming down"})
		os.Exit(1)
	}))

	mux.Handle("/", http.HandlerFunc(func(w http.ResponseWriter, req *http.Request) {
		r.HTML(w, 200, "index", nil)
	}))

	mux.Handle("/build/", http.StripPrefix("/build/", http.FileServer(http.Dir("build"))))

	n := negroni.Classic()
	n.UseHandler(mux)
	n.Run(":8080")
}
